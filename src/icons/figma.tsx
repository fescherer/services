import { TIconColor } from '@/@types/icon'

export function FigmaIcon({ color = 'currentColor' }: TIconColor) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.16006 0H15.8399C18.2247 0 20.16 1.93525 20.16 4.32003C20.16 5.99123 19.2096 7.44161 17.8202 8.15996C19.2096 8.87835 20.16 10.3288 20.16 12C20.16 14.3848 18.2247 16.32 15.8399 16.32C14.4834 16.32 13.2723 15.6938 12.4801 14.7149V19.68C12.4801 22.0648 10.5448 24 8.16006 24C5.77527 24 3.84 22.0648 3.84 19.68C3.84 18.0088 4.79039 16.5583 6.17985 15.84C4.79038 15.1216 3.84 13.6712 3.84 12C3.84 10.3288 4.79037 8.87835 6.17983 8.15996C4.79038 7.44161 3.84 5.99123 3.84 4.32003C3.84 1.93525 5.77527 0 8.16006 0ZM4.8 4.32003C4.8 2.46545 6.30545 0.96 8.16006 0.96H11.5199V7.67994H8.16006L8.14964 7.67995C6.2998 7.67433 4.8 6.17112 4.8 4.32003ZM11.5201 11.9543C11.52 11.9695 11.5199 11.9847 11.5199 12C11.5199 12.0152 11.52 12.0304 11.5201 12.0457V15.3599H8.16003C6.30545 15.36 4.8 13.8546 4.8 12C4.8 10.1488 6.29987 8.64553 8.14973 8.63996L8.16006 8.63997H11.5199L11.5201 11.9543ZM12.4801 12.0402V11.9597C12.5017 10.1282 13.9913 8.64734 15.8262 8.63997H15.8399C15.8434 8.63997 15.8468 8.63996 15.8503 8.63996C17.7001 8.64553 19.2 10.1488 19.2 12C19.2 13.8546 17.6945 15.36 15.8399 15.36C13.9988 15.36 12.5017 13.8763 12.4801 12.0402ZM13.1253 8.63997C12.8882 8.83174 12.6719 9.04806 12.4801 9.28506V8.63997H13.1253ZM15.8504 7.67995C15.8469 7.67994 15.8434 7.67994 15.8399 7.67994C15.8347 7.67994 15.8294 7.67995 15.8242 7.67997H12.4801V0.96H15.8399C17.6945 0.96 19.2 2.46545 19.2 4.32003C19.2 6.17112 17.7002 7.67433 15.8504 7.67995ZM8.16006 16.3199C6.30545 16.3199 4.8 17.8254 4.8 19.68C4.8 21.5345 6.30545 23.04 8.16006 23.04C10.0147 23.04 11.5201 21.5345 11.5201 19.68V16.3199H8.16006Z" fill={color} />
    </svg>

  )
}
