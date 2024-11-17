'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const NewDocumentButton = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleCreateNewDocument = async () => {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };

  return (
    <div>
      <Button onClick={handleCreateNewDocument} disabled={isPending}>
        {isPending ? 'Creating...' : 'New Document'}
      </Button>
    </div>
  );
};
export default NewDocumentButton;
