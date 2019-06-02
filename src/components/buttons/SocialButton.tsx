import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FAwesomeButton } from "./FAwesomeButton";

export const SocialButton: React.FC<SocialButtonProps> = (button: SocialButtonProps) => {
  const socialPlatforms = {
        facebook: ['fab','facebook-f'],
        twitter: ['fab','twitter'],
        instagram: ['fab','instagram'],
        undefined: ['far', 'question-circle']
  }
  const getIcon = (platform: SocialPlatform): IconProp => {
    if (platform in socialPlatforms) {
      return socialPlatforms[platform] as IconProp;
    }
    return socialPlatforms.undefined as IconProp;
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
    Facebook = 'facebook',
    Twitter = 'twitter',
    Instagram = 'instagram',
    Undefined = 'undefined'
}