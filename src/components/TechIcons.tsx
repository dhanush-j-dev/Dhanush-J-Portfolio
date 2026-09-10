import React from 'react';
import { Database, Server, Layers, ShieldCheck, FileCode, Cpu, Lock, Workflow, Terminal } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

export const JavaIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#E76F00" d="M8.85 16.82s-.98.08-1.4.31c-.63.35-.18.84.28.93 1.07.21 2.92.2 4.14-.14 0 0 .84-.33.39-.77-.42-.4-1.89-.33-3.41-.33zm-.42-2.14s-1.12.16-1.54.49c-.73.57.07.97.59 1.04 1.43.21 3.84.18 5.23-.19 0 0 .9-.35.48-.84-.45-.51-2.48-.5-4.76-.5zm4.84-2.83c.72.67.57 1.34-.14 1.83-1.42.98-4.94 1.04-6.84.12-.42-.2-.59-.51-.31-.79.37-.37 1.48-.47 2.37-.47.66 0 1.55.03 2.45-.06 1.05-.1 1.94-.3 2.47-.63zm-4.3-3.47c-.38.74-.75 1.53-.16 2.3.93-1.02 1.84-1.49 1.76-2.5-.02-.31-.1-.65-.21-1.02-.33.35-.93.75-1.39 1.22zm2.84-.71c.71 1.21.36 2.51-.78 3.51 1.55-.7 2.4-1.84 2.15-2.88-.13-.53-.45-1.01-.89-1.44-.22.25-.37.52-.48.81z" />
    <path fill="#5382A1" d="M18.83 17.07c.07.26-.06.51-.35.68-1.58.91-4.71 1.25-7.59 1.29-3.05.04-6.42-.33-7.51-1.42-.3-.3-.15-.65.28-.86 1.73-.83 5.47-.68 7.9-.53 2.32.14 5.34.33 7.27.84zM6.9 19.86c2.4.24 6.77.21 9.42-.51.4-.11.75.14.77.45.02.32-.26.6-.66.72-2.92.83-7.66.86-10.22.56-.47-.06-.67-.36-.45-.66.19-.27.7-.5 1.14-.56z" />
  </svg>
);

export const SpringBootIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#6DB33F" d="M21.576 9.873c-.23-.424-.544-.795-.92-1.085l-7.234-5.59a2.766 2.766 0 0 0-3.414 0l-7.234 5.59c-.376.29-.69.66-.92 1.085a2.793 2.793 0 0 0-.324 1.341v7.054c0 .487.112.964.324 1.39.23.424.544.795.92 1.085l7.234 5.59a2.77 2.77 0 0 0 3.414 0l7.234-5.59c.376-.29.69-.661.92-1.085.212-.426.324-.903.324-1.39V11.214a2.795 2.795 0 0 0-.324-1.341zm-9.576 7.427c-3.13 0-5.3-2.31-5.3-5.3 0-3.04 2.23-5.3 5.3-5.3 2.14 0 3.82 1.14 4.67 2.87l-2.05 1.02c-.52-.96-1.46-1.52-2.62-1.52-1.68 0-2.88 1.25-2.88 2.93s1.2 2.93 2.88 2.93c1.16 0 2.1-.56 2.62-1.52l2.05 1.02c-.85 1.73-2.53 2.87-4.67 2.87z" />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    width={size}
    height={size}
  >
    <ellipse cx="12" cy="12" rx="4.2" ry="10.5" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="4.2" ry="10.5" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="4.2" ry="10.5" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
  >
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path fill="#000000" d="M7.7 18.2c-.7-.4-1.2-1.1-1.3-2.1l2.2-.4c.1.6.3.9.7 1.1.3.2.7.2 1.1 0 .4-.2.5-.5.5-.9 0-.4-.2-.7-.6-.9-.2-.1-.7-.3-1.4-.6-.9-.4-1.5-.8-1.8-1.2-.3-.4-.5-.9-.5-1.5 0-.7.3-1.4.8-1.8.6-.5 1.4-.7 2.4-.7.9 0 1.6.2 2.1.7.5.5.8 1.1.9 1.9l-2.1.3c-.1-.4-.2-.7-.5-.9-.3-.2-.6-.3-1.1-.3-.4 0-.7.1-.9.3-.2.2-.3.4-.3.7 0 .3.1.5.4.7.2.1.7.3 1.5.6 1 .4 1.7.8 2.1 1.2.4.4.6 1 .6 1.7 0 .8-.3 1.5-.9 2-.6.5-1.4.7-2.5.7-1.1 0-2-.3-2.8-.9zm8.5.1c-.8-.4-1.3-1.1-1.4-2.1l2.2-.3c.1.5.3.8.6 1 .3.2.7.3 1.2.3.5 0 .8-.1 1.1-.3.2-.2.3-.5.3-.8 0-.4-.2-.7-.6-.9l-1.5-.5c-1-.3-1.7-.8-2.1-1.2-.4-.5-.6-1.1-.6-1.8 0-.8.3-1.5.9-2 .6-.5 1.5-.8 2.6-.8 1 0 1.8.2 2.3.7.6.5.9 1.2.9 2.1l-2.2.2c-.1-.5-.2-.8-.4-1-.3-.2-.7-.3-1.1-.3-.4 0-.7.1-.9.3-.2.2-.3.4-.3.7 0 .3.1.5.3.7.2.1.6.3 1.3.5 1.1.4 1.9.8 2.3 1.3.4.5.6 1.1.6 1.8 0 .8-.3 1.5-1 2-.6.5-1.5.8-2.7.8-1.2.1-2.1-.2-2.9-.8z" />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
  >
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path fill="#FFFFFF" d="M12.2 11.2h-3.4v8.8H6.5v-8.8H3.1V9.4h9.1v1.8zm2.4 7.2c.6.4 1.3.6 2.1.6.8 0 1.4-.2 1.8-.5.4-.3.6-.7.6-1.2 0-.4-.1-.7-.4-.9-.2-.2-.7-.4-1.5-.7-.9-.3-1.6-.7-2-1.1-.4-.4-.7-.9-.7-1.6 0-.8.3-1.4.9-1.9.6-.5 1.4-.7 2.4-.7.8 0 1.6.2 2.3.5l-.6 1.6c-.6-.3-1.2-.5-1.8-.5-.6 0-1.1.1-1.4.4-.3.2-.5.6-.5.9 0 .3.1.6.4.8.2.2.7.4 1.5.7 1 .3 1.7.7 2.1 1.2.4.4.6 1 .6 1.7 0 .8-.3 1.5-.9 2-.6.5-1.5.8-2.6.8-.9 0-1.8-.2-2.6-.7l.5-1.6z" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#3776AB" d="M11.91 2c-4.22 0-3.95 1.83-3.95 1.83l.01 1.9h4.04v.57H6.38S3.5 5.98 3.5 10.22c0 4.25 2.51 4.1 2.51 4.1h1.5v-2.1s-.08-2.51 2.47-2.51h4.25s2.38.04 2.38-2.32V4.99s.36-2.99-4.7-2.99zm-2.28 1.46a.82.82 0 1 1 0 1.64.82.82 0 0 1 0-1.64z" />
    <path fill="#FFD43B" d="M12.09 22c4.22 0 3.95-1.83 3.95-1.83l-.01-1.9h-4.04v-.57h5.63s2.88.32 2.88-3.92c0-4.25-2.51-4.1-2.51-4.1h-1.5v2.1s.08 2.51-2.47 2.51H9.77s-2.38-.04-2.38 2.32v2.5s-.36 2.99 4.7 2.99zm2.28-1.46a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64z" />
  </svg>
);

export const MySQLIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#00758F" d="M12.63 4.24c-1.28.34-2.73 1.13-3.69 2.03-.66.62-1.39 1.66-1.57 2.22-.05.17-.11.23-.28.27-.6.15-1.48.9-1.97 1.66-.46.72-.6 1.47-.46 2.45.1.72.48 1.54.98 2.11.39.44.89.81 1.46 1.08.38.18.42.24.42.59 0 .54.26 1.25.68 1.83.67.92 1.76 1.63 2.94 1.93.59.15 1.62.15 2.22 0 1.34-.33 2.52-1.19 3.23-2.36.42-.7.59-1.41.59-2.44 0-1.23-.3-2.14-1.02-3.08-.75-.98-1.89-1.74-3.19-2.13-.53-.16-.62-.22-.62-.43 0-.44.59-1.4 1.09-1.78.43-.33 1.17-.6 1.72-.62.48-.02.72-.1.97-.33.32-.3.41-.65.28-1.05-.12-.39-.53-.78-1.02-.97-.5-.2-1.12-.22-1.74-.01z" />
    <path fill="#F29111" d="M14.92 14.8c-.8 0-1.45-.65-1.45-1.45s.65-1.45 1.45-1.45 1.45.65 1.45 1.45-.65 1.45-1.45 1.45z" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.186V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m21.826.33a.186.186 0 0 0-.177-.13h-2.145c-.317-1.39-1.272-2.482-2.583-3.036l-.37-.156-.264.304c-.65.748-1.574 1.25-2.585 1.385l-.26.035.04.26c.074.48.077.965.008 1.442-.254 1.764-1.277 3.292-2.825 4.19-1.306.758-2.82 1.162-4.377 1.168-1.02-.004-2.033-.18-2.996-.52-1.464-.52-2.73-1.425-3.66-2.617l-.234-.3-.36.14c-1.04.407-1.802 1.272-2.148 2.433-.298.995-.23 2.052.193 3.013.784 1.782 2.373 3.044 4.262 3.385 1.545.28 3.125.176 4.622-.303 3.967-1.267 6.643-4.524 7.202-8.528.913-.15 2.11-.643 2.923-1.58.483-.555.772-1.242.842-1.98z" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#F05032" d="m21.707 10.707-8.414-8.414a2 2 0 0 0-2.828 0L8.757 3.999l3.35 3.35a2.25 2.25 0 0 1 2.85 2.85l3.242 3.243a2.25 2.25 0 1 1-1.414 1.414l-3.08-3.08v4.062a2.25 2.25 0 1 1-2 0V9.828a2.25 2.25 0 0 1-1.242-2.964L7.098 5.498 2.293 10.303a2 2 0 0 0 0 2.828l8.414 8.414a2 2 0 0 0 2.828 0l8.172-8.172a2 2 0 0 0 0-2.828z" />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const PostmanIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#FF6C37" d="M13.528.001C8.2.184 3.868 4.296 3.551 9.619c-.066 1.114.103 2.219.505 3.25L.234 16.692a1.05 1.05 0 0 0-.234.667v5.589c0 .582.47 1.052 1.05 1.052h5.594a1.05 1.05 0 0 0 .668-.235l3.821-3.821c1.03.402 2.136.571 3.25.505 5.323-.317 9.435-4.65 9.618-9.978C24.237 4.717 19.284-.236 13.528.001zm3.684 14.808c-1.376.685-3.05.518-4.254-.427l-3.327 3.327c.945 1.205 1.112 2.878.427 4.254l-3.55 3.55H2.102v-4.408l3.55-3.55a4.015 4.015 0 0 1-.427-4.254l3.327-3.327c-1.205-.945-1.372-2.618-.686-3.994a3.155 3.155 0 0 1 4.254-.427c1.376-.685 3.05-.518 4.254.427a3.155 3.155 0 0 1 4.254.427 3.157 3.157 0 0 1 .427 4.254c-.685 1.376-.518 3.05.427 4.254a3.155 3.155 0 0 1-.427 4.254 3.155 3.155 0 0 1-4.254.427z" />
  </svg>
);

export const MavenIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#C71A36" d="M17.48 2.25c-.71.56-1.57 1.54-2.22 2.65-.67 1.13-1.12 2.45-1.35 3.73-.24 1.31-.24 2.59-.06 3.77.16 1.05.48 2.01.93 2.84l-2.02 2.02c-.39-.81-.68-1.74-.83-2.73-.17-1.14-.15-2.39.05-3.66.21-1.27.65-2.58 1.3-3.71.65-1.12 1.51-2.12 2.22-2.68l1.98-2.23z" />
    <path fill="#84196D" d="M12.78 17.26c-.34.61-.75 1.17-1.23 1.65-.48.48-1.04.89-1.65 1.23l-1.92-1.92c.61-.34 1.17-.75 1.65-1.23.48-.48.89-1.04 1.23-1.65l1.92 1.92z" />
    <path fill="#E65100" d="M7.98 18.22c-.67.43-1.42.74-2.21.92-.79.18-1.62.22-2.45.13l.87 2.48c.83.09 1.66.05 2.45-.13.79-.18 1.54-.49 2.21-.92l-.87-2.48z" />
  </svg>
);

export const VSCodeIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#007ACC" d="m23.15 2.587-4.47-2.152a1.86 1.86 0 0 0-2.136.438L7.842 8.784 4.14 5.97a1.05 1.05 0 0 0-1.28.083L.367 8.358a1.05 1.05 0 0 0-.012 1.531l3.528 3.328-3.528 3.328a1.05 1.05 0 0 0 .012 1.531l2.493 2.305a1.05 1.05 0 0 0 1.28.083l3.702-2.814 8.702 7.91a1.86 1.86 0 0 0 2.136.439l4.47-2.152a1.86 1.86 0 0 0 1.03-1.666V4.253a1.86 1.86 0 0 0-1.03-1.666zM18.72 17.07l-7.228-5.07 7.228-5.07z" />
  </svg>
);

export const SQLIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center font-mono font-black text-xs text-amber-400 rounded-md bg-amber-500/10 border border-amber-500/25 px-1.5 py-0.5 ${className}`}>
    <span>SQL</span>
  </div>
);

export const SQLiteIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path fill="#003B57" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7h2v2.5z" />
    <path fill="#00ADEF" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1 5h2v2h-2zm0 4h2v4h-2z" />
  </svg>
);

export const SpringMVCIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 ${className}`}>
    <Workflow className="w-6 h-6" />
  </div>
);

export const SpringSecurityIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 ${className}`}>
    <ShieldCheck className="w-6 h-6" />
  </div>
);

export const RestApiIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 ${className}`}>
    <Server className="w-6 h-6" />
  </div>
);

export const JdbcIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 ${className}`}>
    <Database className="w-6 h-6" />
  </div>
);

export const JwtIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 ${className}`}>
    <Lock className="w-6 h-6" />
  </div>
);

export const OOPIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 ${className}`}>
    <Layers className="w-6 h-6" />
  </div>
);

export const CollectionsIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 ${className}`}>
    <Cpu className="w-6 h-6" />
  </div>
);

export const ExceptionHandlingIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 ${className}`}>
    <ShieldCheck className="w-6 h-6" />
  </div>
);

export const FileHandlingIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 ${className}`}>
    <FileCode className="w-6 h-6" />
  </div>
);

export const DatabaseIntegrationIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 ${className}`}>
    <Database className="w-6 h-6" />
  </div>
);

export const GenericCodeIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <div className={`flex items-center justify-center p-1.5 rounded-lg bg-slate-500/10 border border-slate-500/30 text-slate-400 ${className}`}>
    <Terminal className="w-6 h-6" />
  </div>
);

export const getSkillIcon = (skillName: string): React.ReactNode => {
  switch (skillName.toLowerCase()) {
    case 'java':
      return <JavaIcon className="w-8 h-8" />;
    case 'spring boot':
      return <SpringBootIcon className="w-8 h-8" />;
    case 'spring mvc':
      return <SpringMVCIcon className="w-8 h-8" />;
    case 'spring security':
      return <SpringSecurityIcon className="w-8 h-8" />;
    case 'rest apis':
    case 'rest api':
      return <RestApiIcon className="w-8 h-8" />;
    case 'jdbc':
      return <JdbcIcon className="w-8 h-8" />;
    case 'jwt':
      return <JwtIcon className="w-8 h-8" />;
    case 'react':
      return <ReactIcon className="w-8 h-8" />;
    case 'javascript':
      return <JavaScriptIcon className="w-8 h-8" />;
    case 'typescript':
      return <TypeScriptIcon className="w-8 h-8" />;
    case 'python':
      return <PythonIcon className="w-8 h-8" />;
    case 'sql':
      return <SQLIcon className="w-8 h-8" />;
    case 'mysql':
      return <MySQLIcon className="w-8 h-8" />;
    case 'sqlite':
      return <SQLiteIcon className="w-8 h-8" />;
    case 'docker':
      return <DockerIcon className="w-8 h-8" />;
    case 'git':
      return <GitIcon className="w-8 h-8" />;
    case 'github':
      return <GitHubIcon className="w-8 h-8" />;
    case 'maven':
      return <MavenIcon className="w-8 h-8" />;
    case 'postman':
      return <PostmanIcon className="w-8 h-8" />;
    case 'vs code':
      return <VSCodeIcon className="w-8 h-8" />;
    case 'oop':
      return <OOPIcon className="w-8 h-8" />;
    case 'collections':
      return <CollectionsIcon className="w-8 h-8" />;
    case 'exception handling':
      return <ExceptionHandlingIcon className="w-8 h-8" />;
    case 'file handling':
      return <FileHandlingIcon className="w-8 h-8" />;
    case 'database integration':
      return <DatabaseIntegrationIcon className="w-8 h-8" />;
    default:
      return <GenericCodeIcon className="w-8 h-8" />;
  }
};
