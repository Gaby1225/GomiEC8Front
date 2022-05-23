export interface Coleta {
  id?: string,
  nome: string;
  tipo: string;
  peso?: number;
  clienteId?: string;
  status?: boolean;
  motoristaId?: string;
}
