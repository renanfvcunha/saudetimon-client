/* eslint-disable import/prefer-default-export */
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export function DotIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16Z" />
    </SvgIcon>
  );
}

export function CloseIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7z" />
    </SvgIcon>
  );
}
