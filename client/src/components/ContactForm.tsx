import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <MapPin className="text-primary" />,
      title: "Location",
      details: ["123 Detail Ave", "Columbus, OH 43215"]
    },
    {
      icon: <Phone className="text-primary" />,
      title: "Phone",
      details: ["(555) 123-4567"]
    },
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      details: ["info@fairwaydetailing.com"]
    },
    {
      icon: <Clock className="text-primary" />,
      title: "Hours",
      details: ["Mon-Fri: 8am - 6pm", "Sat: 9am - 4pm", "Sun: Closed"]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5 text-white" />, href: "#" },
    { icon: <Instagram className="w-5 h-5 text-white" />, href: "#" },
    { icon: <Twitter className="w-5 h-5 text-white" />, href: "#" },
    { icon: <Youtube className="w-5 h-5 text-white" />, href: "#" }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="bg-primary text-white p-3 rounded-lg mb-6 text-center">
        <h3 className="font-heading font-bold text-xl">We come to you!</h3>
        <p className="mt-1 text-sm">Save time with our convenient mobile detailing service</p>
      </div>
      <h3 className="font-heading font-bold text-xl mb-6">Get In Touch</h3>
      
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full mr-4">
              {item.icon}
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h4 className="font-heading font-semibold mb-3">Follow Us</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              className="bg-primary bg-opacity-10 text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-colors flex items-center justify-center"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="font-heading font-bold text-xl mb-6">Send Us a Message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Textarea {...field} rows={5} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-semibold"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export { ContactForm, ContactInfo };
