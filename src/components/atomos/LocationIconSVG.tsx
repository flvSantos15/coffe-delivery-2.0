interface ILocationIconSVGProps {
  color: string
}

export function LocationIconSVG({ color }: ILocationIconSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M11 1.375C8.995 1.37727 7.07277 2.17477 5.65502 3.59252C4.23727 5.01027 3.43977 6.9325 3.4375 8.9375C3.4375 15.4086 10.3125 20.2984 10.6047 20.5047C10.7218 20.5827 10.8593 20.6243 11 20.6243C11.1407 20.6243 11.2782 20.5827 11.3953 20.5047C11.6875 20.2984 18.5625 15.4086 18.5625 8.9375C18.5602 6.9325 17.7627 5.01027 16.345 3.59252C14.9272 2.17477 13.005 1.37727 11 1.375ZM11 6.1875C11.5439 6.1875 12.0756 6.34878 12.5278 6.65096C12.9801 6.95313 13.3325 7.38262 13.5407 7.88512C13.7488 8.38762 13.8033 8.94055 13.6972 9.474C13.5911 10.0074 13.3291 10.4974 12.9445 10.882C12.5599 11.2666 12.0699 11.5286 11.5365 11.6347C11.0031 11.7408 10.4501 11.6863 9.94762 11.4782C9.44512 11.27 9.01563 10.9176 8.71346 10.4653C8.41128 10.0131 8.25 9.4814 8.25 8.9375C8.25 8.20815 8.53973 7.50868 9.05546 6.99296C9.57118 6.47723 10.2707 6.1875 11 6.1875Z"
        fill={color}
      />
    </svg>
  )
}