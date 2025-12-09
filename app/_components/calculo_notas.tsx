"use client"; // Necessário para usar useState

import { useState } from 'react';
import { matérias } from '../_components/notas'; // Ajuste o caminho se necessário

export function Calculo_Notas() {
    const [selectedSubject, setSelectedSubject] = useState<keyof typeof matérias>('C03');
    const [notas, setNotas] = useState<any>({});
    //Seta para já começar abrindo a matéria C03

    const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubject(e.target.value as keyof typeof matérias);
        setNotas({}); // Limpa notas ao trocar de matéria
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotas({ ...notas, [e.target.name]: e.target.value });
    };

    // Pega a matéria atual e calcula
    const subject = matérias[selectedSubject];
    const { np1, np2, npa, nfa, status, fazer_np3, nota_necessaria } = subject.calculate(notas);

    // Define cor do status
    const getStatusColor = () => {
        if (status.includes('Aprovado')) return 'text-green-600';
        if (status.includes('Reprovado')) return 'text-red-600';
        return 'text-orange-500'; // NP3 ou Aguardando
    };

    return (
        <section className="pt-13 font-aboreto text-black">
            <div className="w-full max-w-[720px] mx-auto bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                    <label className="block font-bold mb-2 text-[#0054A6]">Selecione a Disciplina:</label>
                    <select 
                        className="w-full p-3 border-2 border-[#0054A6] rounded-md bg-white font-mono font-bold cursor-pointer"
                        value={selectedSubject} 
                        onChange={handleSubjectChange}
                    >
                        {Object.entries(matérias).map(([key, sub]) => (
                            <option key={key} value={key}>{sub.name}</option>
                        ))}
                    </select>
                </div>

                {/* Inputs (Baseado na configuração da matéria) */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {subject.inputs.map((field) => (
                        <div key={field.id}>
                            <label className="text-sm font-semibold text-gray-600 block mb-1">{field.label}</label>
                            <input 
                                type="number" 
                                name={field.id}
                                value={notas[field.id] || ''}
                                onChange={handleChange}
                                className="w-full border p-2 rounded focus:border-[#0054A6] outline-none transition-colors"
                                placeholder="0"
                            />
                        </div>
                    ))}
                </div>

                {/* Resultados */}
                <div className='bg-[#0054A6]/20 pt-4 rounded-lg mb-4'>
                    <div className="grid grid-cols-2 gap-4">
                        <span className='text-center'>NP1: <b>{np1.toFixed(1)}</b></span>
                        <span className='text-center'>NP2: <b>{np2.toFixed(1)}</b></span>
                    </div>
                    <div className="text-center p-4">
                        <p className="text-xl font-bold text-[#0054A6]">NPA: {npa.toFixed(1)}</p>
                        <div className='flex justify-center gap-1 pt-2'>
                            <p className='font-bold '>Situação: </p>
                            <p className={`font-bold ${getStatusColor()}`}>
                             {status}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Campo de Exame (NP3) - Só aparece se necessário */}
                {fazer_np3 && (
                    <div className="mt-4 border-t border-gray-200 pt-4">
                        {/* MENSAGEM DO QUANTO PRECISA TIRAR */}
                        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-center">
                            <p className="text-yellow-800 font-semibold">
                                Você precisa tirar <span className="text-xl font-bold">{nota_necessaria.toFixed(1)}</span> no exame final para passar.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}