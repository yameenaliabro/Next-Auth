"use client";

import { Button } from 'antd';
import { signOut, useSession } from 'next-auth/react';

export default function ClientComponent() {
    const { data: session, status } = useSession();
    return (
        <div>
            ClientComponent {status}{' '}
            {status === 'authenticated' &&
                <>
                    <h1>{session.user?.name}</h1>
                    <Button type='primary' onClick={() => signOut()}>SignOut</Button>
                </>
            }
        </div>
    );
}
