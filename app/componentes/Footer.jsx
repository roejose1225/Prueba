export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-bold text-orange-500 mb-4">Tudelu</h4>
          <p>Walls that move you.</p>
        </div>

        <div>
          <h5 className="mb-3">Quick Links</h5>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Solutions</li>
          </ul>
        </div>

        <div>
          <h5 className="mb-3">Office</h5>
          <p>London, UK</p>
        </div>

        <div>
          <h5 className="mb-3">Contact</h5>
          <p>info@tudelu.com</p>
        </div>
      </div>
    </footer>
  );
}