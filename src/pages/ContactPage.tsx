import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Send, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call secure edge function instead of direct EmailJS
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        throw new Error(data.error);
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      
    } catch (error: any) {
      const errorMessage = error?.message || 'There was an error sending your message. Please try again.';
      
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: MapPin,
    title: "Visit Our Office",
    details: ["JBCN Parel", "Mumbai, Maharashtra", "India"],
    color: "text-primary"
  }, {
    icon: Mail,
    title: "Email Us",
    details: ["jbcnparelclimateactionproject@gmail.com", "General & Support Inquiries", "Response within 24 hours"],
    color: "text-accent"
  }];
  const socialLinks = [{
    icon: Instagram,
    href: "https://www.instagram.com/the.climateactionproject/",
    label: "Instagram",
    color: "hover:text-pink-500"
  }];
  const departments = [{
    name: "General Inquiries",
    email: "jbcnparelclimateactionproject@gmail.com"
  }, {
    name: "Partnership Opportunities",
    email: "jbcnparelclimateactionproject@gmail.com"
  }, {
    name: "Media & Press",
    email: "jbcnparelclimateactionproject@gmail.com"
  }, {
    name: "Volunteer Programs",
    email: "jbcnparelclimateactionproject@gmail.com"
  }, {
    name: "Technical Support",
    email: "jbcnparelclimateactionproject@gmail.com"
  }];
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              Get in{' '}
              <span className="bg-gradient-earth bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 text-balance px-2 max-w-3xl mx-auto leading-relaxed">
              Ready to join our mission? Have questions about our initiatives? 
              We'd love to hear from you and help you get involved.
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-center">
                Response within 24 hours • Global Support Team
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4" ref={ref}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-3 w-full">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -50
            }} transition={{
              duration: 0.8
            }} className="w-full">
                <Card className="p-4 sm:p-6 lg:p-8 shadow-card border-none bg-background w-full">
                  <div className="text-center lg:text-left mb-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Send us a Message</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                      <div className="w-full">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="transition-all duration-300 focus:scale-[1.02] w-full" required />
                      </div>
                      <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="transition-all duration-300 focus:scale-[1.02] w-full" required />
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="transition-all duration-300 focus:scale-[1.02] w-full" required />
                    </div>
                    
                    <div className="w-full">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us more about your inquiry..." rows={5} className="transition-all duration-300 focus:scale-[1.02] sm:rows-6 w-full resize-none" required />
                    </div>
                    
                    <div className="w-full flex justify-center lg:justify-start">
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full sm:w-auto min-w-[200px] bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-hero disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                        <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </div>
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 w-full">
              <div className="space-y-4 sm:space-y-6 w-full">
                {contactInfo.map((info, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: 50
              }} animate={isInView ? {
                opacity: 1,
                x: 0
              } : {
                opacity: 0,
                x: 50
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="w-full">
                    <Card className="p-3 sm:p-4 md:p-6 shadow-card border-none bg-background hover:shadow-soft transition-all duration-300 active:scale-[0.98] touch-manipulation w-full">
                      <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 ${info.color} flex-shrink-0`}>
                          <info.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base leading-tight">{info.title}</h3>
                          <div className="space-y-0.5 sm:space-y-1">
                            {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-xs sm:text-sm text-muted-foreground break-words leading-relaxed">
                                {detail}
                              </p>)}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>)}

                {/* Social Media */}
                <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={isInView ? {
                opacity: 1,
                x: 0
              } : {
                opacity: 0,
                x: 50
              }} transition={{
                duration: 0.6,
                delay: 0.4
              }} className="w-full">
                  <Card className="p-4 sm:p-6 shadow-card border-none bg-gradient-to-br from-primary/5 to-secondary/5 w-full">
                    <div className="text-center lg:text-left">
                      <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
                      <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start">
                        {socialLinks.map(social => <a 
                            key={social.label} 
                            href={social.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label} 
                            className={`w-9 h-9 sm:w-10 sm:h-10 bg-background rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${social.color}`}
                          >
                            <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>)}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      

      {/* Map Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Visit Our Office</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-2 max-w-3xl mx-auto leading-relaxed">
              Drop by our headquarters or schedule a virtual meeting.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="max-w-4xl mx-auto">
            <Card className="p-3 sm:p-4 lg:p-6 shadow-card border-none bg-gradient-to-br from-primary/5 to-secondary/5 w-full">
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8956157!2d72.8311!3d19.0087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzMxLjMiTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JBCN Parel Mumbai Location"
                  className="rounded-lg sm:rounded-xl w-full"
                />
              </div>
              <div className="mt-4 sm:mt-6 text-center px-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">JBCN Parel, Mumbai</h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 max-w-md mx-auto leading-relaxed">
                  Visit our campus for climate action initiatives
                </p>
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://maps.app.goo.gl/Vz5Yd6sRrCKQDAUQ9', '_blank')}
                    className="hover:bg-primary/10 text-xs sm:text-sm"
                  >
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ContactPage;