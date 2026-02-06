import React from 'react';
import CarouselSection from '../ui/CarouselSection';

// Note: Recebe tudo via props agora (Controlado pela LessonView)
const SidebarContent = ({ 
  modules, 
  activeModuleIndex, 
  setActiveModuleIndex, 
  activeSubModuleIndex, 
  setActiveSubModuleIndex 
}) => {
  
  // Garante que os índices sejam válidos para evitar erros se os dados mudarem
  const safeModuleIndex = (activeModuleIndex >= 0 && activeModuleIndex < modules.length) ? activeModuleIndex : 0;
  const currentModule = modules[safeModuleIndex];
  
  const subModulesList = currentModule?.subModules || [];
  
  // Pega o submódulo ativo com segurança
  const safeSubIndex = (activeSubModuleIndex >= 0 && activeSubModuleIndex < subModulesList.length) ? activeSubModuleIndex : 0;
  const currentSubModule = subModulesList[safeSubIndex];

  return (
    <div className="w-full space-y-8">
      
      {/* Cabeçalho da Sidebar */}
      <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl border border-white/5 shadow-lg">
        
        {/* LOGO SVG PERSONALIZADA */}
        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-white/10 shadow-inner p-2">
           <svg className="w-full h-full drop-shadow-[0px_0px_5px_rgba(59,130,246,0.5)]" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-blue-500" d="M16.827 1.14349C16.2925 1.03605 15.7363 0.92093 15.1946 0.867209C14.5879 0.805814 14.0462 0.775116 13.555 0.775116C11.482 0.775116 10.3914 1.2893 9.58962 1.81884C9.03345 2.18721 8.72287 2.62465 8.65064 3.11581C8.57841 3.63767 8.78787 4.2286 9.26459 4.81186C10.1819 5.94767 11.4315 6.53861 12.421 6.93767C13.1866 7.24465 13.9739 7.5286 14.7396 7.79721C16.2564 8.34209 17.831 8.90233 19.29 9.66977C20.6263 9.47023 21.9553 9.11721 23.2338 8.63372C23.0821 8.55698 22.9232 8.48023 22.757 8.40349C22.6993 8.38047 22.6415 8.34977 22.5909 8.32674C21.0452 7.6207 19.4056 7.11419 17.8165 6.61535C16.8342 6.30837 15.8158 5.99372 14.8263 5.63302C14.7324 5.60233 14.6385 5.56395 14.5518 5.53326C13.7789 5.25698 12.9772 4.97302 12.3271 4.26698L12.0815 3.99837L12.3271 3.72977C12.7099 3.31535 13.1216 3.40744 13.3744 3.46116C13.4033 3.46884 13.4394 3.47651 13.4683 3.48419C16.9498 4.12884 19.7667 4.92698 22.3453 6.0014C22.3887 6.01674 22.432 6.03977 22.4826 6.06279C23.0315 6.3007 23.1976 6.30837 23.241 6.26233C23.241 6.26233 23.4504 5.98605 22.9304 4.60465C21.9553 2.02605 19.6295 0.575581 18.4811 0C18.6183 0.176512 18.77 0.437442 18.7628 0.706047C18.7555 0.821163 18.7266 0.936279 18.6689 1.04372C18.3872 1.55023 17.896 1.38907 17.6865 1.32767C17.6288 1.31233 17.5782 1.2893 17.5349 1.2893C17.2893 1.24326 17.0509 1.18953 16.827 1.14349Z" fill="currentColor"></path>
                <path className="fill-blue-500" d="M20.7635 21.8951C20.229 21.826 19.6801 21.734 19.1311 21.6342C14.2412 20.744 10.6081 19.0326 8.43395 18.0119C5.617 16.6842 2.87951 15.0726 0.286475 13.223C0.00478025 14.19 -0.16857 15.5023 0.25036 16.8914C0.459825 17.5898 0.748744 18.0809 0.943763 18.3879C1.6805 19.5467 2.72061 20.5521 4.12908 21.4423C5.24864 22.156 6.44042 22.8007 7.66832 23.3533C9.22848 24.0593 10.9042 24.6502 12.6521 25.103C15.1657 25.7554 17.766 26.4307 20.3879 26.4921C20.5685 26.4998 20.7491 26.4998 20.9224 26.4921C21.1247 26.4921 21.3269 26.4998 21.5219 26.4998C21.9481 26.5151 22.3598 26.5228 22.757 26.4844C24.1077 26.3463 25.1478 25.9165 25.9207 25.1874L25.9496 25.1567C26.2602 24.8651 26.578 24.5658 26.7874 24.0593C27.0764 23.3686 27.0186 22.6702 26.9175 22.2021C24.8661 22.2712 22.7932 22.1714 20.7635 21.8951Z" fill="currentColor"></path>
                <path className="fill-blue-500" d="M23.9849 9.15558C22.4609 9.78488 20.8719 10.2223 19.2684 10.4526C19.2322 10.4602 19.1889 10.4679 19.1528 10.4679C19.0733 10.4833 18.9939 10.4909 18.9144 10.4986C15.8014 10.89 12.6305 10.5216 9.49572 9.40116C7.57442 8.71814 5.7109 7.76651 3.93406 6.5693C3.74626 6.68442 3.56569 6.81488 3.39234 6.9607C3.284 7.05279 3.00952 7.35209 2.6556 7.79721C2.08499 8.51093 1.83941 9.10954 1.90441 9.6314C1.96942 10.1686 2.3739 10.7058 3.13231 11.2814C3.97017 11.9184 4.93082 12.4556 6.07205 12.9314C7.32162 13.4533 8.64342 13.8447 9.9291 14.2207C10.1891 14.2974 10.4419 14.3742 10.6947 14.4509C12.5871 15.0188 14.5012 15.0802 16.5236 15.1493C17.6504 15.1877 18.8133 15.226 19.9834 15.3565C20.0629 15.3488 20.1423 15.3412 20.2218 15.3335C21.558 15.1953 22.6631 14.8653 23.5805 14.3358C24.44 13.837 24.9962 13.1463 25.184 12.3328C25.3934 11.4119 25.1551 10.3681 24.57 9.66977C24.4183 9.47791 24.2161 9.3014 23.9849 9.15558Z" fill="currentColor"></path>
                <path className="fill-blue-500" d="M21.2763 16.6151C20.9513 16.4079 20.6118 16.2467 20.2362 16.124C20.164 16.1316 20.0918 16.1393 20.0195 16.147H19.9834L19.9473 16.1393C18.7989 16.0088 17.636 15.9705 16.5092 15.9321C14.5301 15.863 12.4788 15.794 10.5069 15.203C10.283 15.134 10.0591 15.0726 9.8352 15.0035C10.3408 15.2644 10.8464 15.5254 11.3448 15.7786C13.4683 16.8684 15.6641 17.9888 17.701 19.3626C17.766 19.4086 17.831 19.447 17.8888 19.493C18.4522 19.8691 19.03 20.2528 19.3912 20.9051C19.8751 20.9895 20.359 21.0663 20.8357 21.1277C22.7643 21.3886 24.7217 21.4884 26.6647 21.4347C26.5491 21.1737 26.383 20.9051 26.159 20.6135C24.8156 18.856 22.9376 17.6588 21.2763 16.6151Z" fill="currentColor"></path>
                <path className="fill-blue-500" d="M14.0895 32.5933C15.8519 32.1328 17.2748 31.3807 18.4522 30.2909C18.8133 29.9609 18.7916 29.7844 18.7411 29.6386C18.6977 29.5081 18.6255 29.4774 18.2788 29.4391C18.2427 29.4391 18.2138 29.4314 18.1777 29.4314C17.8093 29.3854 17.4337 29.347 17.0726 29.3086C16.1769 29.2165 15.2524 29.1167 14.3495 28.9479C13.9306 28.8635 13.49 28.7944 13.0711 28.7253C11.6265 28.4874 10.1241 28.2419 8.6073 27.5588L7.15549 26.9065L8.73009 26.8221C10.3336 26.7377 11.9299 26.753 13.4756 26.7607C14.4434 26.7684 15.3824 26.776 16.3142 26.7607C15.0213 26.4998 13.7428 26.1698 12.4932 25.8398C10.7381 25.387 9.0479 24.796 7.4733 24.09C6.92436 24.1437 6.36097 24.2895 5.8048 24.5274C5.02472 24.8574 4.51912 25.387 4.3891 26.0163C4.25187 26.6533 4.50467 27.3747 5.08973 28.05C7.35773 30.644 10.6947 31.2656 11.0703 31.327C11.6987 31.4344 12.3343 31.4881 12.9627 31.4881H13.9234L12.291 33C12.7388 32.9693 13.1722 32.8465 13.6272 32.716C13.7789 32.6777 13.9378 32.6316 14.0895 32.5933Z" fill="currentColor"></path>
                <path className="fill-blue-500" d="M4.71414 12.1409C4.7647 12.1486 4.8297 12.1409 4.83693 12.2177C4.80081 12.1947 4.75747 12.1716 4.71414 12.1409Z" fill="currentColor"></path>
           </svg>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white leading-tight">
            {currentModule?.title || "Módulo"}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            <p className="text-sm text-gray-400 line-clamp-1">
              {currentSubModule?.title || "Selecione um tópico"}
            </p>
          </div>
        </div>
      </div>
      {/* --------------------------------------- */}

      {/* Carrossel de Módulos (AZUL) */}
      <div>
        <div className="flex items-center justify-between mb-4 px-2">
           <div className="h-1 flex-1 bg-gradient-to-r from-blue-600/50 to-transparent rounded-full mr-4"></div>
           <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Módulos</span>
           <div className="h-1 flex-1 bg-gradient-to-l from-blue-600/50 to-transparent rounded-full ml-4"></div>
        </div>
        <CarouselSection 
          items={modules}
          activeIndex={safeModuleIndex}
          setActiveIndex={setActiveModuleIndex}
          colorTheme="blue"
        />
      </div>

      {/* Carrossel de Sub-Módulos (ROXO) */}
      {subModulesList.length > 0 ? (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex items-center justify-between mb-4 px-2">
             <div className="h-1 flex-1 bg-gradient-to-r from-purple-600/50 to-transparent rounded-full mr-4"></div>
             <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Sub-Módulos</span>
             <div className="h-1 flex-1 bg-gradient-to-l from-purple-600/50 to-transparent rounded-full ml-4"></div>
          </div>
          <CarouselSection 
            items={subModulesList}
            activeIndex={safeSubIndex}
            setActiveIndex={setActiveSubModuleIndex}
            colorTheme="purple"
          />
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500 text-sm italic">
          Nenhum submódulo disponível neste módulo.
        </div>
      )}

    </div>
  );
};

export default SidebarContent;