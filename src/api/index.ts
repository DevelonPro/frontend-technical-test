// eslint-disable-next-line no-unused-vars
import { vehicleAdditionalInfo, vehicleRawPayload, vehicleSummaryPayload } from '../types/api';
import { request } from './request';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
const getData = async (): Promise<Array<vehicleSummaryPayload>> => {
  const { data: vehiclesData }: { data: vehicleRawPayload[] } = await request('/api/vehicles.json');

  if (!vehiclesData) throw Error('No vehicle data');

  const mappedData = await Promise.all(
    vehiclesData
      .filter(({ apiUrl } : { apiUrl: vehicleRawPayload['apiUrl'] }) => apiUrl !== '/api/vehicle_problematic.json')
      .map(async ({ apiUrl, ...vehicle } : vehicleRawPayload): Promise<vehicleSummaryPayload> => {
        const { data: additionalInfo } : { data: vehicleAdditionalInfo } = await request(apiUrl);

        return {
          ...vehicle,
          additionalInfo
        };
      })
  );

  return mappedData.filter(({ additionalInfo: { price } }) => price);
};

export default getData;
