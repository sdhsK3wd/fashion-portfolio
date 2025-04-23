export default function ContactPage() {
    return (
        <main className="bg-black text-gray-100 min-h-screen px-6 py-10">
            <h1 className="text-4xl font-bold text-purple-500 text-center mb-10">Kontakt</h1>
            <form className="max-w-xl mx-auto space-y-6">
                <input
                    type="text"
                    placeholder="Dein Name"
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-gray-100 border border-gray-700 rounded"
                />
                <input
                    type="email"
                    placeholder="Deine E-Mail"
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-gray-100 border border-gray-700 rounded"
                />
                <textarea
                    rows={5}
                    placeholder="Deine Nachricht"
                    className="w-full px-4 py-3 bg-[#1a1a1a] text-gray-100 border border-gray-700 rounded"
                ></textarea>
                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded shadow"
                >
                    Nachricht senden
                </button>
            </form>
        </main>
    );
}
