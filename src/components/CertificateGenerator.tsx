import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import { format } from "date-fns";

const CertificateGenerator = () => {
  const [name, setName] = useState("");
  const [currentDate] = useState(format(new Date(), "dd/MM/yyyy"));
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("certificateName");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleNameChange = (value: string) => {
    setName(value);
    localStorage.setItem("certificateName", value);
  };

  const downloadCertificate = async () => {
    if (!name.trim()) {
      toast.error("Please enter your name first");
      return;
    }

    if (!certificateRef.current) return;

    try {
      toast.info("Generating your certificate...");
      
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
        useCORS: true,
        allowTaint: true
      });

      const link = document.createElement("a");
      link.download = `${name.replace(/\s+/g, "_")}_Climate_Champion_Certificate.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      toast.success("Certificate downloaded successfully!");
    } catch (error) {
      console.error("Error generating certificate:", error);
      toast.error("Failed to generate certificate. Please try again.");
    }
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-2">
          <Award className="w-8 h-8 text-primary mr-2" />
          <CardTitle className="text-2xl md:text-3xl">Claim Your Certificate!</CardTitle>
        </div>
        <CardDescription className="text-base">
          You've completed all 10 challenges! Enter your name to generate your personalized certificate.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="max-w-md mx-auto space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">Your Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="text-lg"
              maxLength={50}
            />
          </div>
          
          <Button 
            onClick={downloadCertificate}
            disabled={!name.trim()}
            className="w-full"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Certificate
          </Button>
        </div>

        {/* Certificate Preview */}
        {name.trim() && (
          <div className="mt-8">
            <h3 className="text-center text-lg font-semibold mb-4">Certificate Preview</h3>
            <div 
              ref={certificateRef}
              className="relative w-full max-w-3xl mx-auto aspect-[1.414/1] bg-white rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="/certificates/certificate-template.png"
                alt="Certificate Template"
                className="absolute inset-0 w-full h-full object-contain"
                crossOrigin="anonymous"
              />
              {/* Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center" style={{ marginTop: "-8%" }}>
                  <p 
                    className="font-alex-brush text-2xl sm:text-3xl md:text-4xl"
                    style={{ 
                      fontFamily: "'Alex Brush', cursive",
                      color: "#000000",
                      letterSpacing: "0.05em",
                      lineHeight: "1.2"
                    }}
                  >
                    {name}
                  </p>
                </div>
              </div>

              {/* Date in bottom left corner */}
              <div className="absolute bottom-0 left-0 w-full flex items-end" style={{ paddingBottom: "8%", paddingLeft: "20%" }}>
                <p 
                  className="text-xs sm:text-sm md:text-base font-medium"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: "#000000",
                    letterSpacing: "0.02em"
                  }}
                >
                  {currentDate}
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Preview may differ slightly from downloaded certificate
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CertificateGenerator;
