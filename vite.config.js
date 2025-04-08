import {resolve} from'path'
import { defineConfig} from 'vite'
export default defineConfig({
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
      port: 3000,

        host: true,
        open: true, // Tarayıcıyı otomatik olarak aç


    },
    build:
    {
        // cssCodeSplit:true,
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions:{
            input:{
                main: resolve(__dirname, './src/index.html'),
                // CozyGoldenHourOfficeArticle: resolve(__dirname,'./src/CozyGoldenHourOffice/CozyGoldenHourOfficeArticle.html'),
                // CozyGoldenHourOffice: resolve(__dirname,'./src/CozyGoldenHourOffice/CozyGoldenHourOffice.html'),
                // avrupaYakasia: resolve(__dirname,'./src/AvrupaYakasiDergiOfisi/avrupaYakasi.html'),
                // avrupaYakasiProcess: resolve(__dirname,'./src/AvrupaYakasiDergiOfisi/avrupaYakasiProcess.html'),
                metro: resolve(__dirname,'./src/metro/mainProjectPage/metroProjectPage.html'),
                metroFolder: resolve(__dirname,'./src/metro/mainProjectPage/metroProcessFolder.html'),
                metroCharacterArticle: resolve(__dirname,'./src/metro/Characters/Saxophonist/saxophonist.html'),
                metroCharactersFolder: resolve(__dirname,'./src/metro/Characters/charactersFolder.html'),
                metroCollapsing: resolve(__dirname,'./src/collapsingFolderStructure.html'),
                metroEnvironmentAndProps: resolve(__dirname,'./src/metro/EnvironmentAndProps/propsAndEnvironment.html'),
                //METRO
                // metro: resolve(__dirname,'./src/metro/metro.html'),
                // characters:resolve(__dirname,'./src/metro/Character/character.html'),
                // mainCharacter:resolve(__dirname,'./src/metro/Character/MainCharacter/mainCharacter.html'),
                // sideCharacter:resolve(__dirname,'./src/metro/Character/SideCharacter/sideCharacter.html'),
                // faceretopology:resolve(__dirname,'./src/metro/Character/MainCharacter/Process/FaceRetopology.html'),
                //Environment
                //     tubeModeling :resolve(__dirname,'./src/metro/Environment/Process/tubeModeling.html'),
                //     environmentProcess:resolve(__dirname,'./src/metro/Environment/envrionmentProcess.html'),
                // //Project Design
                //     projectDesign:resolve(__dirname,'./src/metro/ProjectDesign/projectDesign.html')
                //DemModa
                DemModa: resolve(__dirname,'./src/DemModa/process.html'),
                DemModaProjectPage: resolve(__dirname,'./src/DemModa/projectPage.html'),

                }
        }
    }
    
  })