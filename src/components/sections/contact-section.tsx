"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { siteConfig } from "@/data/site";
import { trackContactForm, trackExternalLink } from "@/lib/analytics";

const EMAILJS_SERVICE_ID = "service_zs8h84h";
const EMAILJS_TEMPLATE_ID = "template_jej5wjg";
const EMAILJS_PUBLIC_KEY = "HJi1MJmtdwAm4P2fz";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: values.name, email: values.email, message: values.message },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      trackContactForm(true);
      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      form.reset();
    } catch {
      trackContactForm(false);
      toast.error("Something went wrong", {
        description: "Please try again, or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleFormSubmit = form.handleSubmit(onSubmit);

  return (
    <section id="contact" className="relative py-28">
      <div className="container-portfolio">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          accent="together."
          description="Have a project in mind or an opportunity to discuss? I'm always open to a conversation."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Phone, label: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
              {
                icon: WhatsAppIcon,
                label: "WhatsApp",
                value: siteConfig.phoneDisplay,
                href: siteConfig.whatsapp,
                external: true,
              },
              { icon: MapPin, label: "Location", value: siteConfig.location },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      onClick={item.external ? () => trackExternalLink("whatsapp", item.href) : undefined}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="mb-3 text-sm font-medium">Connect</p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink("github", siteConfig.social.github)}
                  aria-label="GitHub"
                  className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink("linkedin", siteConfig.social.linkedin)}
                  aria-label="LinkedIn"
                  className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <LinkedinIcon className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <Form {...form}>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane@company.com" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="Tell me about your project..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
