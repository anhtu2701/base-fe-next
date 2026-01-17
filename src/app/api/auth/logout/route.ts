import { ResponseCode } from '@/constants';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    (await cookies()).delete('access_token');
    (await cookies()).delete('refresh_token');

    return Response.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return Response.json(
      { message: 'Internal server error' },
      { status: ResponseCode.SERVER_ERROR }
    );
  }
}
