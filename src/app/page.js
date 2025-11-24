import Image from "next/image";

export default function SulingSundaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-amber-700 mb-4">
          Suling Sunda 1 Set — Lubang 6 & Lubang 4
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Suara merdu khas Sunda, cocok untuk latihan, pentas seni, dan koleksi.
        </p>

        <div className="flex justify-center">
          <img
  src="https://p19-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2021/6/5/149cc711-62b1-4ea6-97dd-1a6604eaeb17.png~tplv-aphluv4xwc-white-pad-v1:1600:1600.jpeg?lk3s=0ccea506&x-expires=1763958228&x-signature=UhfOU7EilcQ84aG71ZPDO%2B6LkYg%3D&x-signature-webp=Yur3iVH7GphwDaZoUUEfUpONf3A%3D"
  alt="Suling Sunda"
  className="rounded-xl shadow-lg w-[600px] h-[300px] object-cover"
/>
        </div>

       <p className="text-3xl font-semibold text-amber-700 mt-8">
  Rp 180.000
</p>

<div className="flex flex-col items-center gap-4 mt-6">
  {/* ORDER WA */}
  <a
    href="https://wa.me/6281380837591?text=Halo%2C+saya+mau+order+Suling+Sunda+1+set" target="_blank"
    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg transition inline-block"
  >
    Order via WhatsApp
  </a>

  {/* ORDER TOKOPEDIA */}
  <a
    href="https://www.tokopedia.com/batarasundamusik/jual-suling-sunda-kualitas-oke-dari-bambu-pilihan?extParam=src%3Dshop%26whid%3D3932952&aff_unique_id=&channel=others&chain_key=" 
    target="_blank"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition inline-block"
  >
    Order via Tokopedia
  </a>
</div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-amber-700 mb-4">
          Kenapa Pilih Suling Sunda Kami?
        </h2>

        <ul className="space-y-3 text-lg">
          <li>• Terbuat dari bambu pilihan, suara lebih jernih dan stabil.</li>
          <li>• Mendapat 1 set: Suling lubang 6 dan lubang 4.</li>
          <li>• Cocok untuk pemula hingga pemain profesional.</li>
          <li>• Finishing halus dan nyaman digenggam.</li>
          <li>• Packing aman dan rapi untuk pengiriman seluruh Indonesia.</li>
        </ul>
      </section>

      {/* TESTIMONI */}
      <section className="bg-amber-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-amber-800 mb-8">
            Apa Kata Pembeli?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <p>"Suaranya lembut banget. Anak saya suka untuk latihan seni musik."</p>
              <p className="mt-3 font-semibold">— Rina, Bandung</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p>"Harga terjangkau tapi kualitasnya mantap. Recommended!"</p>
              <p className="mt-3 font-semibold">— Deden, Garut</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p>"Pengiriman cepat, packing aman, langsung bisa dipakai."</p>
              <p className="mt-3 font-semibold">— Yusuf, Tasikmalaya</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-500">
        © 2025 Suling Sunda Store
      </footer>
    </main>
  );
}