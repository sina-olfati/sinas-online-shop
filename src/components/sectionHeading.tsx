interface HeadingData {
    name: string;
    icon: React.ReactNode; // Typing icon as React.ReactNode
  }
  
  export function SectionHeading({ name, icon }: HeadingData) {
    return (
      <div className="w-full p-7 pb-2 font-bold text-lg flex gap-2 text-primary">
        {icon}
        <h1 className="text-secondary-foreground">{name}</h1>
      </div>
    );
  }
  