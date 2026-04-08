type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-[2rem] bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${className}`}
    >
      {children}
    </article>
  );
}