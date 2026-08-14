"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Send, CheckCircle2, Building2, User, Mail, Phone, FileText, Wrench, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLang } from "@/context/lang-context"
import { toast } from "sonner"

function createFormSchema(v: {
  fullNameMin: string;
  companyMin: string;
  emailInvalid: string;
  phoneMin: string;
  messageMin: string;
}) {
  return z.object({
    fullName: z.string().min(2, { message: v.fullNameMin }),
    company: z.string().min(2, { message: v.companyMin }),
    email: z.string().email({ message: v.emailInvalid }),
    phone: z.string().min(6, { message: v.phoneMin }),
    oemOrDetails: z.string().optional(),
    message: z.string().min(10, { message: v.messageMin }),
  });
}

export function ContactForm() {
  const { dict } = useLang();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formSchema = createFormSchema(dict.contacts.validation);
  type FormValues = z.infer<typeof formSchema>
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      oemOrDetails: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if(!response.ok) throw new Error("Failed to send message")
      setIsSubmitted(true);
      console.log("Data is sent to server:", values)
      form.reset();
      toast.success(dict.contacts.successTitle ?? "Message sent successfully!")
    } catch (error) {
      console.error("Failed to submit form: ", error);
      toast.error(dict.contacts.errorTitle ?? "Something went wrong. Please try again.");
    }
  }

  if (isSubmitted) {
    return (
      <div className="font-heading bg-white rounded-2xl border-2 border-ink p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 bg-brand/15 text-brand rounded-2xl flex items-center justify-center mx-auto border border-brand/30">
          <CheckCircle2 className="w-10 h-10 text-brand" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-ink uppercase tracking-wide">
            {dict.contacts?.successTitle ?? "Message Sent!"}
          </h3>
          <p className="text-zinc-800 text-base max-w-md mx-auto leading-relaxed">
            {dict.contacts?.successDesc ?? "Thank you for reaching out. Our export team will contact you shortly."}
          </p>
        </div>
        <Button
          onClick={() => {
            form.reset()
            setIsSubmitted(false)
          }}
          className="bg-brand hover:bg-brand-dark text-ink font-bold uppercase text-xs tracking-wider h-11 px-8 rounded-xl transition-all cursor-pointer"
        >
          {dict.contacts?.sendAnother ?? "Send another message"}
        </Button>
      </div>
    )
  }

  return (
    <div className="font-heading bg-white rounded-2xl border border-zinc-200 p-6 sm:p-10 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand" />
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-sm font-caption font-bold text-ink uppercase mb-3">
          <Wrench className="w-3.5 h-3.5 text-brand" />
          {dict.contacts.formBadge}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight uppercase">
          {dict.contacts.formTitle}
        </h2>
        <p className="text-zinc-700">
          {dict.contacts.formSubtitle}
        </p>
      </div>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Controller
            control={form.control}
            name="fullName"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand" />
                  {dict.contacts.fullNameLabel} *
                </FieldLabel>
                <Input
                  id={field.name}
                  placeholder={dict.contacts.fullNamePlaceholder}
                  {...field}
                  aria-invalid={fieldState.invalid}
                  className="h-11 rounded-xl border-zinc-300 focus-visible:ring-brand focus-visible:border-brand"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} className="text-xs font-medium text-red-500" />}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="company"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-brand" />
                  {dict.contacts.companyLabel} *
                </FieldLabel>
                <Input
                  id={field.name}
                  placeholder={dict.contacts.companyPlaceholder}
                  {...field}
                  aria-invalid={fieldState.invalid}
                  className="h-11 rounded-xl border-zinc-300 focus-visible:ring-brand focus-visible:border-brand"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} className="text-xs font-medium text-red-500" />}
              </Field>
            )}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand" />
                  {dict.contacts.emailLabel} *
                </FieldLabel>
                <Input
                  id={field.name}
                  type="email"
                  placeholder={dict.contacts.emailPlaceholder}
                  {...field}
                  aria-invalid={fieldState.invalid}
                  className="h-11 rounded-xl border-zinc-300 focus-visible:ring-brand focus-visible:border-brand"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} className="text-xs font-medium text-red-500" />}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand" />
                  {dict.contacts.phoneLabel} *
                </FieldLabel>
                <Input
                  id={field.name}
                  type="tel"
                  placeholder={dict.contacts.phonePlaceholder}
                  {...field}
                  aria-invalid={fieldState.invalid}
                  className="h-11 rounded-xl border-zinc-300 focus-visible:ring-brand focus-visible:border-brand"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} className="text-xs font-medium text-red-500" />}
              </Field>
            )}
          />
        </div>
        <Controller
          control={form.control}
          name="oemOrDetails"
          render={({ field }) => (
            <Field>
              <FieldLabel htmlFor={field.name} className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-brand" />
                {dict.contacts.oemLabel}
              </FieldLabel>
              <Input
                id={field.name}
                placeholder={dict.contacts.oemPlaceholder}
                {...field}
                className="h-11 rounded-xl border-zinc-300 focus-visible:ring-brand focus-visible:border-brand"
              />
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-brand" />
                {dict.contacts.messageLabel} *
              </FieldLabel>
              <Textarea
                id={field.name}
                rows={4}
                placeholder={dict.contacts.messagePlaceholder}
                {...field}
                aria-invalid={fieldState.invalid}
                className="rounded-xl border-zinc-300 focus-visible:ring-brand focus-visible:border-brand resize-none"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} className="text-xs font-medium text-red-500" />}
            </Field>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-12 bg-brand hover:bg-brand-dark text-ink font-bold uppercase tracking-wider text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-black/10 cursor-pointer"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{dict.contacts.sending ?? "Sending..."}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 fill-current" />
              <span>{dict.contacts.submitBtn}</span>
            </>
          )}
        </Button>
      </form>
    </div>
  )
}