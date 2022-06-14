// eslint-disable-next-line no-unused-vars
import { VehicleAdditionalInfo, VehicleRawPayload, VehicleSummaryPayload } from '../types/api';
import { request } from './request';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array<VehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
const getData = async (): Promise<Array<VehicleSummaryPayload>> => {
  const { data: vehiclesData }: { data: VehicleRawPayload[] } = await request('/api/vehicles.json');

  if (!vehiclesData) throw Error('No vehicle data');

  const mappedData = await Promise.all(
    vehiclesData
      .filter(({ apiUrl } : { apiUrl: VehicleRawPayload['apiUrl'] }) => apiUrl !== '/api/vehicle_problematic.json')
      .map(async ({ apiUrl, ...vehicle } : VehicleRawPayload): Promise<VehicleSummaryPayload> => {
        const { data: additionalInfo } : { data: VehicleAdditionalInfo } = await request(apiUrl);

        return {
          ...vehicle,
          additionalInfo
        };
      })
  );

  return mappedData.filter(({ additionalInfo: { price } }) => price);
};

export default getData;
