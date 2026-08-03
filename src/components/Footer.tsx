import { Facebook, Youtube, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/10 pt-16 pb-8 text-white/70 backdrop-blur-md relative z-10 w-full mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-sm text-white/70">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6 pr-4">
             <img src="https://www.chettinadtech.ac.in/assets/images/CCET_Logo_white.png" alt="CCET Karur" className="h-12 object-contain self-start" />
             <p className="leading-relaxed text-[13px]">
               Promoted by the Rani Meyyammai Achi of Chettinad Charitable Trust, ChettinadTech is one of the top engineering colleges in Karur, Tamil Nadu — approved by AICTE and affiliated to Anna University, Chennai.
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#FFC107] font-semibold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Admissions', href: 'https://www.chettinadtech.ac.in/intranet/AdmissionCap' },
                { name: 'Placement', href: 'https://www.chettinadtech.ac.in/intranet/PlacementHome' },
                { name: 'Scholarship', href: 'https://www.chettinadtech.ac.in/intranet/Scholarship' },
                { name: 'Library', href: 'https://www.chettinadtech.ac.in/lib/' },
                { name: 'Contact', href: 'https://www.chettinadtech.ac.in/intranet/Contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-target">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h4 className="text-[#FFC107] font-semibold mb-6 uppercase tracking-widest text-xs">Departments</h4>
            <ul className="space-y-4">
              {[
                { name: 'Computer Science', href: 'https://www.chettinadtech.ac.in/intranet/Course_Details_CSE' },
                { name: 'AI & Data Science', href: 'https://www.chettinadtech.ac.in/intranet/Course_Details_AIDS' },
                { name: 'Information Technology', href: 'https://www.chettinadtech.ac.in/intranet/Course_Details_IT' },
                { name: 'Electronics & Comm.', href: 'https://www.chettinadtech.ac.in/intranet/Course_Details_ECE' },
                { name: 'Electrical & Electronics', href: 'https://www.chettinadtech.ac.in/intranet/Course_Details_EEE' },
                { name: 'Mechanical', href: 'https://www.chettinadtech.ac.in/intranet/Course_Details_Mech' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-target">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="text-[#FFC107] font-semibold mb-6 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-4 mb-6 text-[13px]">
              <li>+91 93450 02630</li>
              <li>+91 93607 02630</li>
              <li><a href="mailto:admin@chettinadtech.ac.in" className="hover:text-white transition-colors cursor-target">Email Us</a></li>
              <li className="leading-relaxed">NH-67, Karur-Trichy Highway,<br/>Puliyur CF, Karur, Tamil Nadu 639114</li>
            </ul>

            {/* Social Media Logos (Preserved as requested) */}
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/Chettinadtech.ac.in" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors cursor-target border border-white/10">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/chettinadtech" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors cursor-target border border-white/10">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.linkedin.com/company/104424632" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors cursor-target border border-white/10">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.youtube.com/channel/UCA9C45i5LsOj7SghvS0eHoA" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors cursor-target border border-white/10">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© Copyright {new Date().getFullYear()}. All Rights Reserved by <a href="#" className="hover:text-white transition-colors cursor-target underline">Intranet - SDC</a></p>
          <p>
            Redesigned for <span className="font-semibold text-white/80">TechGen 2k26</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
