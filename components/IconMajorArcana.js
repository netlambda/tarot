/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const IconMajorArcana = props => (
  <svg width={204} height={359} viewBox="0 0 204 359" fill="none" {...props}>
    <path
      d="M.002 171.51V23.454h23.451V.002h65.595L74.229 9.253V1.915H25.367v21.539h9.078v10.99H23.454v-9.075H1.916v125.509h7.978L.002 171.51zm1.913-18.719v10.303l4.938-10.303H1.915zM25.366 32.53h7.165v-7.161h-7.165v7.161zM76.141 1.915v3.887l6.228-3.887h-6.228z"
      fill="currentcolor"
    />
    <path
      d="M7.469 52.23V17.051h-.987a5.78 5.78 0 01-.779-.054c-.113.73-.368 1.423-.845 2.008-.813.997-2.13 1.516-3.915 1.542l-.03-1.913c1.196-.019 2.022-.3 2.46-.837.293-.357.433-.835.48-1.378C1.625 15.315 0 12.894 0 10.231V.001h10.228c2.663 0 5.085 1.626 6.189 3.852.542-.047 1.021-.188 1.378-.479.537-.437.819-1.263.838-2.458l1.91.027C20.52 2.73 20 4.047 19.005 4.858c-.585.478-1.276.732-2.008.847.036.255.054.516.054.777v.989h35.179l-1.633 1.633c-4.337 4.338-6.164 7.165-6.183 7.193l-.277.434-.518.008-26.58.303-.307 27.094-.436.279c-.03.019-2.855 1.847-7.192 6.183L7.469 52.23zm1.915-35.179v30.604c2.697-2.546 4.624-3.982 5.446-4.56l.296-26.045H9.384v.001zm0-1.913h5.753V9.385H9.384v5.753zm-3.647-.075c.243.05.492.075.745.075h.987V10.33c-.308-.129-.75-.251-1.187-.158-.431.095-.8.392-1.127.909-.047.279.115 1.127.235 1.752.13.678.277 1.445.347 2.23zM17.05 9.385v5.742l26.047-.298c.573-.819 2.013-2.746 4.558-5.444H17.05zM1.915 1.915v8.317c0 1.458.7 2.842 1.746 3.767-.048-.276-.102-.545-.151-.807-.26-1.367-.449-2.356-.014-3.065.619-1.008 1.428-1.623 2.408-1.829 1.545-.322 2.873.538 3.061.668-.131-.188-.989-1.515-.666-3.061.203-.979.817-1.789 1.827-2.407.709-.437 1.698-.247 3.065.015.262.05.53.101.806.149-.924-1.046-2.306-1.747-3.768-1.747H1.915zm8.416 5.556h4.807v-.989c0-.25-.026-.5-.074-.743-.786-.07-1.552-.219-2.231-.347-.626-.12-1.473-.284-1.753-.234-.52.329-.817.701-.908 1.137-.092.432.03.87.159 1.176zM193.973 150.878h7.979V25.369h-21.54v9.075h-10.989v-10.99h9.076l.002-21.539h-48.862v7.338L114.819.002h65.596l-.002 23.452h23.453v148.057l-9.893-20.633zm3.04 1.913l4.938 10.303v-10.303h-4.938zM178.499 25.369h-7.163v7.161h7.163v-7.161zM121.498 1.915l6.228 3.887V1.915h-6.228z"
      fill="currentcolor"
    />
    <path
      d="M194.761 50.597c-4.337-4.336-7.165-6.164-7.191-6.183l-.437-.279-.307-27.094-26.579-.303-.518-.008-.278-.434c-.018-.028-1.845-2.855-6.182-7.193l-1.634-1.633h35.179v-.989c0-.262.019-.522.055-.777-.732-.114-1.423-.369-2.009-.847-.996-.812-1.516-2.128-1.542-3.915l1.913-.027c.018 1.195.3 2.021.836 2.458.358.292.838.433 1.377.479C188.551 1.626 190.972 0 193.633 0h10.23v10.23c0 2.662-1.624 5.083-3.852 6.188.048.543.188 1.021.479 1.378.437.537 1.263.818 2.458.837l-.027 1.913c-1.786-.026-3.104-.545-3.914-1.542-.477-.585-.732-1.277-.848-2.008a5.715 5.715 0 01-.776.054h-.989v35.179l-1.633-1.632zm-6.021-33.546l.296 26.045c.819.577 2.749 2.014 5.446 4.56V17.052h-5.742v-.001zm5.742-7.666h-5.754v5.753h5.754V9.385zm3.993 3.449c.12-.625.282-1.473.234-1.752-.327-.518-.697-.814-1.127-.909-.438-.093-.881.029-1.188.158v4.808h.989c.25 0 .499-.025.745-.075.072-.786.216-1.553.347-2.23zm-42.264-3.449c2.546 2.698 3.982 4.625 4.559 5.444l26.046.298V9.385h-30.605zm37.423-7.47c-1.459 0-2.844.701-3.768 1.747.275-.049.547-.1.809-.149 1.366-.262 2.354-.451 3.063-.015 1.01.618 1.627 1.428 1.83 2.407.323 1.546-.537 2.872-.666 3.061.188-.13 1.516-.99 3.061-.668.978.206 1.789.821 2.408 1.829.434.709.246 1.698-.017 3.065-.05.262-.102.53-.148.807 1.043-.925 1.746-2.309 1.746-3.767V1.915h-8.318zm.061 4.38c-.092-.436-.388-.808-.91-1.137-.277-.05-1.127.114-1.752.234-.678.128-1.446.276-2.229.347-.05.243-.075.493-.075.743v.989h4.807c.128-.306.25-.744.159-1.176zM203.865 186.58v148.054h-23.451v23.453h-65.596l14.82-9.251v7.338H178.5v-21.54h-9.078v-10.99h10.991v9.076h21.538V207.212h-7.979l9.893-20.632zm-1.913 18.717v-10.3l-4.938 10.3h4.938zm-23.451 120.261h-7.165v7.161h7.165v-7.161zm-50.776 30.615v-3.887l-6.228 3.887h6.228z"
      fill="currentcolor"
    />
    <path
      d="M196.395 305.858v35.178h.989c.262 0 .521.019.776.055.115-.73.371-1.423.848-2.009.813-.996 2.128-1.515 3.914-1.541l.029 1.913c-1.194.019-2.021.3-2.46.837-.291.356-.431.835-.479 1.376 2.228 1.105 3.852 3.527 3.852 6.189v10.229l-10.23.001c-2.661 0-5.082-1.626-6.187-3.854-.542.049-1.021.189-1.378.479-.538.438-.82 1.265-.838 2.46l-1.913-.029c.026-1.785.546-3.102 1.542-3.913.586-.479 1.276-.733 2.009-.847a5.584 5.584 0 01-.055-.777v-.989h-35.179l1.634-1.633c4.337-4.338 6.164-7.165 6.182-7.194l.278-.433.518-.008 26.579-.303.307-27.094.437-.279c.026-.019 2.854-1.846 7.191-6.184l1.634-1.63zm-1.913 35.178v-30.604c-2.697 2.545-4.627 3.982-5.446 4.559l-.296 26.045h5.742zm0 1.914h-5.754v5.753h5.754v-5.753zm3.648.075a3.736 3.736 0 00-.745-.075h-.989v4.808c.31.129.752.251 1.188.156.432-.093.8-.39 1.127-.907.048-.279-.114-1.127-.234-1.752-.131-.678-.277-1.445-.347-2.23zm-11.315 5.678v-5.742l-26.046.298c-.576.819-2.013 2.746-4.559 5.444h30.605zm15.137 7.469v-8.315c0-1.458-.7-2.842-1.746-3.767.047.276.099.545.148.806.263 1.368.452 2.356.017 3.066-.619 1.008-1.428 1.623-2.408 1.826-1.545.325-2.873-.535-3.061-.666.131.189.989 1.516.666 3.062-.203.979-.82 1.789-1.827 2.407-.71.435-1.699.247-3.065-.015-.262-.05-.531-.103-.809-.149.926 1.044 2.309 1.747 3.768 1.747l8.317-.002zm-8.417-5.555h-4.807v.989c0 .25.025.5.075.743.786.07 1.552.219 2.231.347.623.12 1.473.284 1.753.234.52-.329.817-.701.907-1.139.092-.43-.03-.869-.159-1.174zM9.892 207.212H1.914V332.72h21.54v-9.076h10.989v10.99h-9.078v21.54h48.862v-7.338l14.819 9.251H23.451l.002-23.453H0V186.58l9.892 20.632zm-3.04-1.915l-4.938-10.3v10.3h4.938zm18.514 127.422h7.165v-7.161h-7.165v7.161zm57.003 23.454l-6.228-3.887v3.887h6.228z"
      fill="currentcolor"
    />
    <path
      d="M9.104 307.49c4.337 4.338 7.165 6.165 7.192 6.184l.436.279.308 27.094 26.579.303.518.008.277.433c.019.029 1.846 2.856 6.183 7.194l1.633 1.633H17.05v.989c0 .262-.017.521-.053.777.73.113 1.423.368 2.008.847.996.812 1.516 2.128 1.541 3.913l-1.911.029c-.019-1.195-.301-2.021-.838-2.46-.357-.29-.836-.431-1.378-.479-1.104 2.228-3.526 3.854-6.187 3.854l-10.23-.001v-10.231c0-2.662 1.624-5.084 3.852-6.189-.048-.541-.188-1.02-.479-1.376-.438-.537-1.265-.818-2.457-.837l.026-1.913c1.787.026 3.104.545 3.915 1.541.477.586.73 1.278.847 2.009.256-.036.516-.055.777-.055h.989v-35.178l1.632 1.632zm6.023 33.546l-.296-26.045c-.82-.576-2.749-2.014-5.446-4.559v30.604h5.742zm-5.743 7.667h5.753v-5.753H9.384v5.753zm-3.993-3.448c-.12.625-.282 1.473-.235 1.752.328.518.696.814 1.127.907.437.095.879-.027 1.188-.156v-4.808h-.99c-.25 0-.501.025-.744.075-.07.785-.217 1.552-.346 2.23zm42.264 3.448c-2.548-2.698-3.984-4.625-4.558-5.444l-26.047-.298v5.742h30.605zm-37.423 7.47c1.459 0 2.841-.703 3.768-1.748-.278.048-.547.101-.81.15-1.366.262-2.355.449-3.064.015-1.008-.618-1.624-1.428-1.827-2.407-.323-1.546.535-2.872.666-3.062-.188.131-1.516.991-3.061.666-.98-.203-1.789-.818-2.408-1.826-.436-.71-.246-1.698.016-3.066.05-.261.102-.529.149-.806-1.046.925-1.746 2.309-1.746 3.767v8.315l8.317.002zm-.061-4.381c.091.438.389.81.908 1.139.28.05 1.129-.114 1.753-.234.68-.128 1.445-.276 2.231-.347.048-.243.074-.493.074-.743v-.989H10.33c-.127.304-.25.743-.159 1.174zM77.96 202.596H45.018c-.931 0-1.769-.57-2.112-1.437l-4.614-11.671a2.282 2.282 0 01.234-2.114 2.275 2.275 0 011.88-.994h42.17a2.272 2.272 0 012.113 3.108l-4.614 11.671a2.276 2.276 0 01-2.115 1.437zm-31.398-4.545h29.854l2.816-7.126H43.747l2.815 7.126z"
      fill="currentcolor"
    />
    <path
      d="M77.96 208.18H45.018a2.273 2.273 0 01-2.272-2.271v-5.585a2.273 2.273 0 012.272-2.273H77.96a2.274 2.274 0 012.274 2.273v5.585a2.273 2.273 0 01-2.274 2.271zm-30.67-4.544h28.399v-1.04h-28.4v1.04zM82.576 189.79c-.45 0-.876-.269-1.055-.712l-20.03-49.645-20.034 49.645a1.135 1.135 0 01-1.477.63 1.138 1.138 0 01-.631-1.479l21.086-52.258a1.139 1.139 0 012.108 0l21.086 52.258a1.137 1.137 0 01-1.053 1.561z"
      fill="currentcolor"
    />
    <path
      d="M61.491 189.79c-.628 0-1.137-.51-1.137-1.138v-52.256a1.136 1.136 0 012.273 0v52.256c0 .628-.508 1.138-1.136 1.138zM158.847 202.596h-32.945a2.27 2.27 0 01-2.111-1.437l-4.615-11.671a2.276 2.276 0 01.235-2.114 2.278 2.278 0 011.879-.994h42.172a2.27 2.27 0 012.112 3.108l-4.613 11.671a2.273 2.273 0 01-2.114 1.437zm-31.397-4.545h29.852l2.817-7.126h-35.486l2.817 7.126z"
      fill="currentcolor"
    />
    <path
      d="M158.847 208.18h-32.945a2.271 2.271 0 01-2.27-2.271v-5.585a2.27 2.27 0 012.27-2.273h32.945a2.271 2.271 0 012.271 2.273v5.585a2.27 2.27 0 01-2.271 2.271zm-30.67-4.544h28.397v-1.04h-28.397v1.04zM163.462 189.79c-.449 0-.876-.269-1.055-.712l-20.031-49.645-20.031 49.645a1.137 1.137 0 01-2.109-.849l21.086-52.258a1.136 1.136 0 012.108 0l21.086 52.258a1.137 1.137 0 01-1.054 1.561z"
      fill="currentcolor"
    />
    <path
      d="M142.376 189.79c-.628 0-1.136-.51-1.136-1.138v-52.256a1.135 1.135 0 112.272 0v52.256a1.138 1.138 0 01-1.136 1.138zM109.002 222.553h-14.14a2.274 2.274 0 01-2.272-2.273v-83.884a2.271 2.271 0 012.272-2.271h14.14a2.273 2.273 0 012.275 2.271v83.884a2.276 2.276 0 01-2.275 2.273zm-11.868-4.547h9.598v-79.337h-9.598v79.337z"
      fill="currentcolor"
    />
    <path
      d="M122.76 231.719H81.106a2.274 2.274 0 01-2.274-2.273v-9.166a2.275 2.275 0 012.274-2.273h41.654a2.275 2.275 0 012.272 2.273v9.166a2.272 2.272 0 01-2.272 2.273zm-39.381-4.544h37.109v-4.622h-37.11v4.622zM154.474 138.038H49.392a2.272 2.272 0 01-2.272-2.272v-7.127a2.272 2.272 0 012.272-2.271h105.082a2.272 2.272 0 012.27 2.271v7.127a2.272 2.272 0 01-2.27 2.272zm-102.81-4.545H152.2v-2.581H51.665v2.581z"
      fill="currentcolor"
    />
    <path
      d="M99.976 159.22a1.137 1.137 0 01-1.137-1.135v-22.32a1.137 1.137 0 112.273 0v22.32c0 .629-.508 1.135-1.136 1.135zM99.976 174.562c-.626 0-1.137-.51-1.137-1.137v-6.246a1.137 1.137 0 112.273 0v6.246c0 .627-.508 1.137-1.136 1.137z"
      fill="currentcolor"
    />
  </svg>
);

export default IconMajorArcana;