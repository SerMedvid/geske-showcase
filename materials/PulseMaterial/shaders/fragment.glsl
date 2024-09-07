uniform float uTime;
uniform vec2 uResolution;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;

    // Create circular gradient
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(uv, center);

    // Ripple effect
    float rippleSpeed = 1.0;
    float rippleFrequency = 10.0;
    float rippleAmplitude = 0.1;
    float ripple = sin(dist * rippleFrequency - uTime * rippleSpeed) * rippleAmplitude;

    // Fade out ripple effect as it moves outward
    float fadeOut = smoothstep(0.0, 0.5, dist);
    ripple *= (1.0 - fadeOut);

    // Add ripple to distance for color calculation
    float colorDist = dist + ripple;

    // Create smooth gradient
    float gradient = smoothstep(0.2, 0.8, colorDist);

    // Purple color
    vec3 color = mix(vec3(0.4, 0.2, 0.5), vec3(0.6, 0.4, 0.7), gradient);

    // Add subtle pulsing glow at the center
    float glow = exp(-dist * 4.0) * (0.5 + 0.5 * sin(uTime));
    color += vec3(0.2, 0.1, 0.3) * glow;

    // Final color
    gl_FragColor = vec4(color, 1.0);

     #include <tonemapping_fragment>
    #include <colorspace_fragment>
}