// app/_utils/subjects.ts

function calcularSituacao(np1: number, np2: number, np3: number = 0) {
    const npa = (np1 + np2) / 2;
    let nfa = npa;
    let status = 'Aprovado';
    let fazer_np3 = false;
    let nota_necessaria = 0;

    // Evita erros visuais se não houver nota
    if (isNaN(npa)) return { np1, np2, npa: 0, nfa: 0, status: 'Aguardando notas', precisaExame: false };

    if (npa < 30) {
        status = 'Reprovado';
    } else if (npa < 60) {
        fazer_np3 = true;
        status = 'NP3';
        nota_necessaria = 100 - npa;
    }

    return { np1, np2, npa, nfa, status, fazer_np3, nota_necessaria};
}

export const matérias = {
    'C03': {
        name: 'C03 - ALGORITMOS E ESTRUTURA DE DADOS II',
        inputs: [
            { id: 'p1', label: 'Prova 1 (P1)' }, 
            { id: 'ex1', label: 'Exercícios 1 (Ex1)' },
            { id: 'p2', label: 'Prova 2 (P2)' }, 
            { id: 'ex2', label: 'Exercícios 2 (Ex2)' }
        ],
        calculate: (n: any) => {
            const np1 = (Number(n.p1) || 0) * 0.8 + (Number(n.ex1) || 0) * 0.2;
            const np2 = (Number(n.p2) || 0) * 0.8 + (Number(n.ex2) || 0) * 0.2;
            return calcularSituacao(np1, np2, Number(n.np3));
        }
    },
    'E10': {
        name: 'E10 - DESENHO',
        inputs: [
            { id: 'p1', label: 'Prova Teórica (P1)' },
            { id: 'ex1', label: 'Lab Info 1 (Ex1)' }, 
            { id: 'ex2', label: 'Lab Info 2 (Ex2)' },
            { id: 'atteo', label: 'Fablab Teórico' }, 
            { id: 'atprat', label: 'Fablab Prático' }
        ],
        calculate: (n: any) => {
            const np1 = Number(n.p1) || 0;
            const np2 = (Number(n.ex1) || 0) * 0.15 + (Number(n.ex2) || 0) * 0.15 + 
                        (Number(n.atteo) || 0) * 0.20 + (Number(n.atprat) || 0) * 0.50;
            return calcularSituacao(np1, np2, Number(n.np3));
        }
    },
    'F01': {
        name: 'F01 - FÍSICA NEWTONIANA CLÁSSICA',
        inputs: [
            { id: 'p1', label: 'Prova Teórica (P1)' }, 
            { id: 'nse', label: 'Seminário (NSE)' }, 
            { id: 'ex1', label: 'Exercícios Assínc. (EX1)' },
            { id: 'p2', label: 'Prova Teórica (P2)' }, 
            { id: 'nsa', label: 'Seminário (NSA)' }, 
            { id: 'ex2', label: 'Exercícios Assínc. (EX2)' }
        ],
        calculate: (n: any) => {
            const np1 = (Number(n.p1) || 0) * 0.75 + (Number(n.nse) || 0) * 0.15 + (Number(n.ex1) || 0) * 0.10;
            const np2 = (Number(n.p2) || 0) * 0.75 + (Number(n.nsa) || 0) * 0.15 + (Number(n.ex2) || 0) * 0.10;
            return calcularSituacao(np1, np2, Number(n.np3));
        }
    },
    'H03': {
        name: 'H03 - HUMANIDADES, CIÊNCIAS SOCIAIS E CIDADANIA',
        inputs: [
            { id: 'ti1', label: 'Artigo Individual (Ti1)' }, 
            { id: 'exs1', label: 'Moodle (Exs1)' },
            { id: 'vd2', label: 'Vídeo Equipe (Vd2)' }, 
            { id: 'pj2', label: 'Projeto Grupo (Pj2)' }
        ],
        calculate: (n: any) => {
            const np1 = (Number(n.ti1) || 0) * 0.9 + (Number(n.exs1) || 0) * 0.1;
            const np2 = (Number(n.vd2) || 0) * 0.7 + (Number(n.pj2) || 0) * 0.3;
            return calcularSituacao(np1, np2, Number(n.np3));
        }
    },
    'M03': {
        name: 'M03 - CÁLCULO APLICADO A ENGENHARIA I',
        inputs: [
            { id: 'p1', label: 'Prova 1 (P1)' }, 
            { id: 'p2', label: 'Prova 2 (P2)' }, 
            { id: 'p3', label: 'Prova 3 (P3)' }
        ],
        calculate: (n: any) => {
            const p1 = Number(n.p1) || 0;
            const p2 = Number(n.p2) || 0;
            const p3 = Number(n.p3) || 0;
            
            const np1 = (p1 * 0.7) + (p2 * 0.3);
            const np2 = (p2 * 0.3) + (p3 * 0.7);
            return calcularSituacao(np1, np2, Number(n.np3));
        }
    },
    'M10': {
        name: 'M10 - MATEMÁTICA DISCRETA',
        inputs: [
            { id: 'pv1', label: 'Prova 1 (PV1)' }, 
            { id: 'pv2', label: 'Prova 2 (PV2)' },
            { id: 'pv3', label: 'Prova 3 (PV3)' }, 
            { id: 'tt', label: 'Trab. Teórico (TT)' }
        ],
        calculate: (n: any) => {
            const np1 = (Number(n.pv1) || 0) * 0.5 + (Number(n.pv2) || 0) * 0.5;
            const np2 = (Number(n.pv3) || 0) * 0.75 + (Number(n.tt) || 0) * 0.25;
            return calcularSituacao(np1, np2, Number(n.np3));
        }
    }
};