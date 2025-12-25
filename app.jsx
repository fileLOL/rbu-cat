import React, { useState } from "react";

export default function App() {
  const [ingressos, setIngressos] = useState(0);

  const rbu = Math.max(0, 2000 - Number(ingressos || 0));
  const total = Number(ingressos || 0) + rbu;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Una RBU a Catalunya</h1>
        <p className="text-center text-gray-600">
          App gratuïta per entendre, simular i difondre la Renda Bàsica Universal
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Simulador personal</h2>
          <label className="block">
            <span className="text-sm text-gray-700">Ingressos mensuals actuals (€)</span>
            <input
              type="number"
              value={ingressos}
              onChange={(e) => setIngressos(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2"
            />
          </label>

          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <p>RBU que rebries: <strong>{rbu.toLocaleString()} €</strong></p>
            <p>Total mensual garantit: <strong>{total.toLocaleString()} €</strong></p>
          </div>

          <p className="text-sm text-gray-600">
            Regla: RBU = max(0, 2000 − ingressos). Cada euro que guanyes sempre suma.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Què és una RBU?</h2>
          <p>
            Una Renda Bàsica Universal garanteix un sòl d’ingressos perquè ningú visqui
            per sota d’un llindar de vida digna. No és una ajuda, és un dret.
          </p>
          <p>
            En aquest model, tothom arriba com a mínim als 2.000 € mensuals.
            Qui ja hi arriba, no rep res. Qui no, rep la diferència.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Impactes positius</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Reducció de pobresa i estrès crònic</li>
            <li>Millora de la salut mental i física</li>
            <li>Més llibertat per treballar, estudiar o cuidar</li>
            <li>Economia local més estable</li>
            <li>Menys burocràcia i estigmatització</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">I tu, què faries?</h2>
          <p className="italic">
            Si la teva existència estigués garantida…
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Canviaries de feina?</li>
            <li>Estudiaries o et formaries?</li>
            <li>Cuidaries més persones?</li>
            <li>Crearies projectes propis?</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Dona suport</h2>
          <p>
            Si creus que una RBU és necessària a Catalunya, comparteix aquesta eina.
          </p>
          <div className="flex gap-3">
            <a
              href="https://t.me/"
              className="flex-1 text-center bg-blue-500 text-white rounded-lg py-2"
            >
              Telegram
            </a>
            <a
              href="https://wa.me/"
              className="flex-1 text-center bg-green-500 text-white rounded-lg py-2"
            >
              WhatsApp
            </a>
          </div>
        </section>

        <footer className="pt-6 border-t text-center text-xs text-gray-500">
          Estudis Autogestió Catalana · App lliure i gratuïta
        </footer>
      </div>
    </div>
  );
}
