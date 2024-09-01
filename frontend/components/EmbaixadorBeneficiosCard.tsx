import React from 'react';
import { Card, CardDescription, CardTitle } from './ui/card';

const EmbaixadorBeneficiosCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            <Card className="flex-1 min-w-[200px] max-w-[300px] rounded-lg shadow-lg h-[150px] sm:h-[200px]">
            <CardTitle>Certificação</CardTitle>
            <CardDescription>
                Ganhe certificação oficial ao final de um período de atuação como embaixador.
            </CardDescription>
            </Card>
            <Card className="flex-1 min-w-[200px] max-w-[300px] rounded-lg shadow-lg h-[250px] sm:h-[300px]">
            <CardTitle>Reconhecimento</CardTitle>
            <CardDescription>
                Enriqueça o seu currículo e pode abrir portas para novas oportunidades de trabalho e educação.
            </CardDescription>
            </Card>
            <Card className="flex-1 min-w-[200px] max-w-[300px] rounded-lg shadow-lg h-[150px] sm:h-[200px]">
            <CardTitle>Networking</CardTitle>
            <CardDescription>
                Conecte-se com líderes, especialistas e empregadores.
            </CardDescription>
            </Card>
        </div>
        </div>
  );
};

export default EmbaixadorBeneficiosCard;
