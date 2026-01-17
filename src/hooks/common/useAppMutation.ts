import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useFeedback } from './useFeedback';

interface NotificationConfig {
  message: string;
  description?: string;
}

interface UseAppMutationOptions<TData, TVariables, TContext = unknown>
  extends Omit<UseMutationOptions<TData, AxiosError, TVariables, TContext>, 'mutationFn'> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  successNotification?: string | NotificationConfig;
  errorNotification?: string | NotificationConfig;
  showSuccessNotification?: boolean;
  showErrorNotification?: boolean;
}

export function useAppMutation<TData = unknown, TVariables = void, TContext = unknown>(
  options: UseAppMutationOptions<TData, TVariables, TContext>
): UseMutationResult<TData, AxiosError, TVariables, TContext> {
  const { notification } = useFeedback();
  const {
    mutationFn,
    successNotification,
    errorNotification,
    showSuccessNotification = true,
    showErrorNotification = true,
    onSuccess,
    onError,
    ...restOptions
  } = options;

  return useMutation<TData, AxiosError, TVariables, TContext>({
    mutationFn,
    onSuccess: (data, variables, context, mutationMeta) => {
      if (showSuccessNotification && successNotification) {
        if (typeof successNotification === 'string') {
          notification.success({
            message: successNotification,
          });
        } else {
          notification.success({
            message: successNotification.message,
            description: successNotification.description,
          });
        }
      }
      onSuccess?.(data, variables, context, mutationMeta);
    },
    onError: (error, variables, context, mutationMeta) => {
      if (showErrorNotification) {
        if (errorNotification) {
          if (typeof errorNotification === 'string') {
            notification.error({
              message: errorNotification,
            });
          } else {
            notification.error({
              message: errorNotification.message,
              description: errorNotification.description,
            });
          }
        } else {
          const errorMessage = (error.response?.data as any)?.message || 'Có lỗi xảy ra';
          notification.error({
            message: 'Lỗi',
            description: errorMessage,
          });
        }
      }
      onError?.(error, variables, context, mutationMeta);
    },
    ...restOptions,
  });
}

