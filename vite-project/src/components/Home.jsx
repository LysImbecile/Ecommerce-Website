import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-700 flex flex-col items-center justify-center bg-cover bg-fixed bg-[url('../bg.jpg')]"  style={{ minHeight: 'calc(100vh - 64px)'}}>
            <div className="bg-white shadow-lg m-4 mb-32 rounded-lg px-4 py-6 text-center">
                <h2 className="text-xl font-medium text-gray-700">Effatha Modelos</h2>
                <p className="text-gray-600 mt-4">A melhor loja de roupas da cidade. Oferecemos uma grande variedade de roupas da moda a preços acessíveis.</p>
            </div>
        </div>
    );
};

export default Home;