interface BaseTestLayoutProps {
  children: React.ReactNode;
}

export default function BaseTestLayout({ children }: BaseTestLayoutProps) {
  return <div className="bg-[#F6FCFF]">{children}</div>;
}
