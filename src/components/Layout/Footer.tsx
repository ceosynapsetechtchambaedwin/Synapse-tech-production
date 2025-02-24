export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 Synapse Tech. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
