import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FAwesomeButton } from "./FAwesomeButton";

export const SocialButton: React.FC<SocialButtonProps> = (button: SocialButtonProps) => {
  const socialPlatforms = {
        facebook: ['fab','facebook-f'],
        twitter: ['fab','twitter'],
        instagram: ['fab','instagram']
  }
  const getIcon = (platform: SocialPlatform): IconProp => {
      switch(platform) {
          case SocialPlatform.Facebook: return ['fab','facebook-f'] as IconProp;
          case SocialPlatform.Twitter: return ['fab','twitter'] as IconProp;
          case SocialPlatform.Instagram: return ['fab','instagram'] as IconProp;
      }
  };

  return (
    <FAwesomeButton link={button.link} icon={getIcon(button.platform)} />
  );
};

export interface SocialButtonProps {
    link: string;
    platform: SocialPlatform
}

export enum SocialPlatform {
    Facebook,
    Twitter,
    Instagram
}