import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitInquiryParams {
  name: string;
  phone: string;
  email: string | null;
  vehicle: string | null;
  service: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitInquiryParams) => {
      if (!actor) throw new Error('Actor not available');
      
      await actor.submitContactForm(
        params.name,
        params.phone,
        params.email,
        params.vehicle,
        params.service,
        params.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
}
