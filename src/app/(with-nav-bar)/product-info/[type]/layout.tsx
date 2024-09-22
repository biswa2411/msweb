
export async function generateStaticParams() {
    return [{ type: "digital" }, { type: "sketch" }, { type: "acrylic" }];
  }
  
export default function ProductInfoLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {

    return (
        <section>
            {children}
        </section>
    )
}