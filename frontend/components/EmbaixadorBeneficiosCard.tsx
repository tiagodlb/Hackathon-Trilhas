import React from 'react';
import { Card, CardDescription, CardTitle } from './ui/card';

const EmbaixadorBeneficiosCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            <Card className="flex-1 min-w-[200px] max-w-[300px] rounded-lg shadow-lg h-[150px] sm:h-[200px]">
            <CardTitle>Certificação</CardTitle>
            <CardDescription>
                Este é o primeiro card. Ele é responsivo e possui bordas arredondadas.
            </CardDescription>
            </Card>
            <Card className="flex-1 min-w-[200px] max-w-[300px] rounded-lg shadow-lg h-[250px] sm:h-[300px]">
            <CardTitle>Reconhecimento</CardTitle>
            <CardDescription>
                Este é o segundo card, também com bordas arredondadas e maior que os outros.
            </CardDescription>
            </Card>
            <Card className="flex-1 min-w-[200px] max-w-[300px] rounded-lg shadow-lg h-[150px] sm:h-[200px]">
            <CardTitle>Networking</CardTitle>
            <CardDescription>
                Este é o terceiro card, que é menor que o segundo e tem altura igual ao primeiro.
            </CardDescription>
            </Card>
        </div>
        </div>
  );
};

export default EmbaixadorBeneficiosCard;
