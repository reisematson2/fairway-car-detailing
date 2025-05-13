import logoPath from "@assets/NewLogo.png";

const Logo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <img 
      src={logoPath} 
      alt="Fairway Car Detailing" 
      className={className} 
    />
  );
};

export default Logo;