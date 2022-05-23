export interface Cliente {
  email: string;
  senha: string;
  nome: string;
  nascimento: Date;
  cpf: string;
  telefone: string;
  rua: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  cep: string;
}
