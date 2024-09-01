import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from './ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const SubscribeEmbaixadorForms: React.FC = () => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      email: '',
      description: ''
    }
  })

  return (
    <main className="pt-4">
      <h1 className="pb-8 text-2xl">Seja um Embaixador</h1>
      <FormProvider {...formMethods}>
        <form className="space-y-8" onSubmit={formMethods.handleSubmit(data => console.log(data))}>
          <FormField
            name="name"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormDescription>Este é o nome que será utilizado para contato.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }: { field: any }) => (
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
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Por que você quer ser um embaixador?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Explique brevemente por que você deseja se tornar um embaixador"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Fale um pouco sobre seu interesse e como você pode contribuir.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-4">
            <Button type="submit" className="cursor-pointer">
              Enviar
            </Button>
          </div>
        </form>
      </FormProvider>
    </main>
  )
}

export default SubscribeEmbaixadorForms
