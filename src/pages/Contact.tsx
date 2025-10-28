import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">info@modeva.com</p>
                  <p className="text-sm text-muted-foreground">support@modeva.com</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Fashion Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
