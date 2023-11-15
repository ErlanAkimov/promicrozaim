export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script>window.yaContextCb=window.yaContextCb||[]</script>
				<script src="https://yandex.ru/ads/system/context.js" async></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
