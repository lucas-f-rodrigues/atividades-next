'use client'

import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  nome: z.string().min(3, { message: "O nome deve ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "Insira um e-mail válido." })
})

export default function Home() {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: ""
    }
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <div className="m-2">
      <h1>Formulário de cadastro</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Enviar</Button>

        </form>
      </Form>
    </div>
  );
}
