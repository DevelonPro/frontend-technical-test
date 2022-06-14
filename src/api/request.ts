import { Request } from '../types/api';

/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Request>}
 */
export async function request(apiUrl: string): Promise<Request> {
  const fetchRequest = await fetch(apiUrl, { method: 'GET' });
  const data = await fetchRequest.json();
  return { data, status: fetchRequest.status };
}
