export interface Indicator {
    version: string,
    fecha: string,
    bitcoin: containerIndicator,
    dolar: containerIndicator,
    euro: containerIndicator,
    dolar_intercambio: containerIndicator,
    imacec: containerIndicator,
    ipc: containerIndicator,
    ivp: containerIndicator,
    libra_cobre: containerIndicator,
    tasa_desempleo: containerIndicator,
    utm: containerIndicator,
    uf: containerIndicator,
    tpm: containerIndicator
}
export interface containerIndicator {
    codigo: string,
    nombre: string,
    unidad_medida?: string,
    fecha?: string,
    valor?: number,
    icon?: string,
    onClickDetail?(item: containerIndicator): void | undefined,
    onClickInformation?(item: containerIndicator): void | undefined
}
export interface DetailSerie {
    fecha: string,
    valor: number
}
export interface DetailIndicators {
    version: string,
    codigo: string,
    nombre: string,
    unidad_medida: string,
    serie: DetailSerie[]
}