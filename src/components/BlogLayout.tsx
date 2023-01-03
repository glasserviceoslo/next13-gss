import AlertBanner from 'src/components/AlertBanner';

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean;
  loading?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen pt-8">
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  );
}
