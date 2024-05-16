import { BaseHeader } from '@/components/BaseHeader'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ExpertForm, ExpertSchema } from './validation'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyInput } from '@/components/ui/currency-input'
import { Textarea } from '@/components/ui/textarea'
import { MaskitoOptions } from '@maskito/core'
import { useMaskito } from '@maskito/react'
import ExpertRequestService from '@/services/expert-request.service'
const phoneMask: MaskitoOptions = {
  mask: [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
}
export function Expert() {
  const navigate = useNavigate()
  const form = useForm<ExpertForm>({
    resolver: zodResolver(ExpertSchema),
    defaultValues: {
      instagram: '',
      youtube: '',
      platforms: '',
      hasProduct: '',
      invoiced: 0,
      productLink: '',
      budget: 0,
      compromised: '',
      searching: '',
      diferential: '',
      extraInfo: '',
      whatsapp: '',
    },
  })

  const phoneRef = useMaskito({ options: phoneMask })

  const { isSubmitting } = form.formState

  async function onSubmit(values: ExpertForm) {
    try {
      const response = await ExpertRequestService.create(values)
      if (response.data.success) {
        toast.success('Sua solicitação foi enviada com sucesso!')
        navigate('/')
      } else {
        throw new Error()
      }
    } catch (error) {
      console.error(error)
      toast.error('Erro ao enviar a solicitação')
    }
  }
  return (
    <div className="flex w-full flex-col items-center justify-center p-6">
      <Helmet title="Expert" />
      <BaseHeader label="Venha ser um expert" />
      <div className="bg-muted mb-10 w-3/4 rounded p-6">
        <h3 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight">
          Aplicação para Lançamento
        </h3>
        <div className="space-y-4">
          <p>Olá</p>
          <p>
            Este é o formulário de aplicação para se tornar um dos nossos
            Especialistas e ter a oportunidade de ser lançado pela equipe da{' '}
            <span className="text-primary font-bold	">NOHAU</span>, com toda a
            nossa estrutura, resultados e Know-How neste mercado.
          </p>
          <p>
            O preenchimento deste formulário não garante que a parceria seja
            fechada. Após análise do formulário, a nossa equipe entrará em
            contato com você.
          </p>
          <p>
            Desde já, agradecemos o interesse e a confiança no nosso trabalho!
          </p>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-muted w-3/4 space-y-4 rounded p-6"
        >
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qual seu Instagram?</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o @ do seu instagram" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="youtube"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Possui Youtube? Se sim, qual o link?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o link do youtube. (caso não tenha apenas digite não)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="platforms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Produz conteúdo em alguma outra plataforma? Se sim, qual o
                  link?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira o link. (caso não tenha apenas digite não)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hasProduct"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Você já possui um produto digital ou pretende criar?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Se possuir, digite quantos possui."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="invoiced"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Caso já tenha um produto, quanto já faturou com as vendas?
                </FormLabel>
                <FormControl>
                  <CurrencyInput
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Qual o link da página de vendas do seu produto, caso haja?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o link caso tenha. (caso não tenha apenas digite não)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Você está disposto a investir em tráfego pago para fazer o seu
                  lançamento? Quanto?
                </FormLabel>
                <FormControl>
                  <CurrencyInput
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="compromised"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Você está disposto a investir em tráfego pago para fazer o seu
                  lançamento? Quanto?
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="searching"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  O que você busca em uma agência de lançamentos?
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="diferential"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Qual você considera que seja o seu maior diferencial como
                  expert?{' '}
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="extraInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Qual você considera que seja o seu maior diferencial como
                  expert?{' '}
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qual o seu WhatsApp para contato?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(xx) xxxxx-xxxx"
                    {...field}
                    ref={phoneRef}
                    onInput={(evt) => {
                      form.setValue('whatsapp', evt.currentTarget.value)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-2">
            <Button
              onClick={() => navigate('/')}
              type="button"
              variant={'secondary'}
              size={'lg'}
            >
              Voltar
            </Button>
            <Button type="submit" size={'lg'} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Carregando
                </>
              ) : (
                <span>Entrar</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
