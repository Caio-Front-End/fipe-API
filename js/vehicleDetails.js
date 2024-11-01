export class VehicleDetails {
  constructor(url) {
    this.url = url;
  }

  async fetchDetails() {
    try {
      const response = await fetch(this.url);
      const vehicleData = await response.json();

      const vehicleDetails = {
        modelo: vehicleData.Modelo,
        marca: vehicleData.Marca,
        ano: vehicleData.AnoModelo,
        preco: vehicleData.Valor,
        combustivel: vehicleData.Combustivel,
        codigoFipe: vehicleData.CodigoFipe,
        mesReferencia: vehicleData.MesReferencia,
      };

      return vehicleDetails;
    } catch (error) {
      console.error('Erro ao buscar os detalhes do veículo:', error);
      return null;
    }
  }
}
