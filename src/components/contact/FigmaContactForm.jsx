import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "../../lib/utils";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function FigmaContactForm() {
  const [status, setStatus] = useState(null);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  // Main connection logic for Web3Forms
  const onSubmit = async (values) => {
    setStatus("loading");
    const formData = {
      ...values,
      access_key: "0881084e-8794-475b-996c-e49f55785f43",
      name: `${values.firstName} ${values.lastName}`,
    };

    // Remove firstName and lastName from payload as we have name
    delete formData.firstName;
    delete formData.lastName;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Top heading */}
      <div className="text-center mb-14">
        <h2 className="font-extrabold text-6xl md:text-7xl lg:text-[82px] leading-tight tracking-tighter drop-shadow-[0_4px_32px_rgba(76,0,255,0.18)] mb-8 bg-gradient-to-r bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
          Get in touch
        </h2>
        <p className="text-white/70 text-lg md:text-xl lg:text-2xl tracking-tight">
          Reach out, and let&apos;s create a universe of possibilities together!
        </p>
      </div>

      {/* Contact form with cosmic background */}
      <div className="relative w-full">
        {/* Background elements */}
        <div className="absolute top-[210px] left-[165px] w-[152px] h-[152px] rounded-full "></div>
        <div className="absolute bottom-[67px] left-[179px] w-[152px] h-[152px] rounded-full"></div>
        <div className="absolute top-[266px] right-[185px] w-[134px] h-[134px] rounded-full"></div>
        {/* Subtle animated stars */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="animate-pulse absolute top-10 left-1/3 w-1 h- rounded-full opacity-70"></div>
          <div className="animate-pulse absolute bottom-10 right-1/4 w-1.5 h-1.5 rounded-full opacity-60"></div>
          <div className="animate-pulse absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full opacity-50"></div>
        </div>
        {/* Form container */}
        <div className="relative w-full max-w-5xl mx-auto bg-white/3 px-10 py-[40px] rounded-[22px] border border-[#0A0D17]/10 z-10">
          <div className="space-y-10">
            {/* Form heading */}
            <div className="flex flex-col items-center justify-center text-center py-4">
              <h3 className="text-white font-semibold text-[28px] leading-tight tracking-tighter flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br  dark:from-blue-400 dark:to-purple-400 animate-pulse"></span>
                Let&apos;s connect constellations
              </h3>
              <p className="text-white/80 text-base tracking-tight max-w-xl mx-auto mt-1">
                Let&apos;s align our constellations! Reach out and let the magic of collaboration illuminate our skies.
              </p>
            </div>


            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* First Name and Last Name row */}
                <div className="grid grid-cols-2 gap-3.5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            {...field}
                            className="border-white/20 bg-black/10 text-white/80 h-11 text-[15px] placeholder:text-white/60 rounded-lg shadow-inner shadow-cyan-400/10 focus:ring-0.2 focus:ring-cyan-400/40 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            {...field}
                            className="border-white/20 bg-white/10 text-white/80 h-11 text-[15px] placeholder:text-white/60 rounded-lg shadow-inner shadow-cyan-400/10 focus:ring-2 focus:ring-cyan-400/40 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="border-white/20 bg-white/10 text-white/80 h-11 text-[15px] placeholder:text-white/60 rounded-lg shadow-inner shadow-cyan-400/10 focus:ring-2 focus:ring-cyan-400/40 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          {...field}
                          className="border-white/20 bg-white/10 text-white/80 h-11 text-[15px] placeholder:text-white/60 rounded-lg shadow-inner shadow-cyan-400/10 focus:ring-2 focus:ring-cyan-400/40 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          {...field}
                          className="border-white/20 bg-white/10 text-white/80 h-[109px] resize-none text-[15px] placeholder:text-white/60 rounded-lg shadow-inner shadow-cyan-400/10 focus:ring-2 focus:ring-cyan-400/40 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit button */}
                <Button
                  type="submit"
                  className={cn(
                    "w-full flex items-center justify-center gap-2 text-black text-[15px] font-medium py-3 px-4 rounded-lg",
                    "relative bg-gradient-to-r  dark:from-blue-400 dark:to-purple-400 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300"
                  )}
                  style={{
                    boxShadow: "0 2px 24px 0 rgba(76,0,255,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.15)",
                  }}
                  disabled={status === "loading"}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "loading" ? (
                      <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-5 h-5"></span>
                    ) : (
                      <>
                        <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-cyan-300">Send it</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-cyan-300"
                        >
                          <path d="M22 2L11 13"></path>
                          <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                        </svg>
                      </>
                    )}
                  </span>
                </Button>
                {status === "success" && (
                  <div className="text-green-400 text-center pt-2 animate-fade-in">
                    Thank you! Your message has been sent.
                  </div>
                )}
                {status === "error" && (
                  <div className="text-red-400 text-center pt-2 animate-fade-in">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
