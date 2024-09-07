uniform sampler2D uTextureStart;
uniform sampler2D uTextureEnd;
uniform float uProgress;

varying vec2 vMapUv;

void main() {
    vec4 texture1 = texture(uTextureStart, vMapUv);
    vec4 texture2 = texture(uTextureEnd, vMapUv);
    vec3 finalColor = mix(texture1, texture2, uProgress).rgb;

    csm_DiffuseColor = vec4(finalColor, 1.);
}