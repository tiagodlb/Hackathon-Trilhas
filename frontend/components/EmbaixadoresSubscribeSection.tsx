import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const EmbaixadoresSubscribeSection: React.FC = () => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
  });

  return (
    <main className="pt-32">
      <FormProvider {...formMethods}>
        <form className="space-y-8" onSubmit={formMethods.handleSubmit((data) => console.log(data))}>
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormDescription>
                  Este é o nome que será utilizado para contato.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seuemail@exemplo.com" {...field} />
                </FormControl>
                <FormDescription>
                  Nós usaremos seu email para entrar em contato com você.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Por que você quer ser um embaixador?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Explique brevemente por que você deseja se tornar um embaixador" {...field} />
                </FormControl>
                <FormDescription>
                  Fale um pouco sobre seu interesse e como você pode contribuir.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-4">
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
};

export default EmbaixadoresSubscribeSection;